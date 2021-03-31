import React from "react";
import {Router, Route} from "react-router-dom";
import {createMemoryHistory} from "history";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import PrivateRoute from "./private-route";
import {AuthorizationStatus} from "../store/const";

const mockStore = configureStore({});
let history;
describe(`Тестирование PrivateRouter`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });

  it(`Рендерится публичный компонент`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it(`Рендерится приватный компонент`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
