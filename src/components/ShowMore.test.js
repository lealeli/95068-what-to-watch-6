import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ShowMore from "./ShowMore";

const mockStore = configureStore({});

let history;
let store;

describe(`Тестирование ShowMore`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/`);
    store = mockStore({});
  });

  it(`ShowMore рендерится корректно когда length > count`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <ShowMore onClick={jest.fn()} length={20} count={5}/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });

  it(`ShowMore не рендерится когда length < count`, () => {
    render(
        <Provider store={store}>
          <Router history={history}>
            <ShowMore onClick={jest.fn()} length={1} count={5}/>
          </Router>
        </Provider>
    );

    expect(screen.queryByText(/Show more/i)).toBeNull();
  });

  it(`При клике на Show more срабатывает onClick`, () => {
    const onClick = jest.fn();

    render(
        <Provider store={store}>
          <Router history={history}>
            <ShowMore onClick={onClick} length={20} count={5}/>
          </Router>
        </Provider>
    );

    userEvent.click(screen.getByText(/Show more/i));

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
    expect(onClick).toBeCalled();
  });
});
