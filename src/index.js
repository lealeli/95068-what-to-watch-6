import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import App from './components/app';
import rootReducer from './store/root-reducer';
import {checkAuth} from './store/api-actions';
import {createAPI} from "./store/api";
import {AuthorizationStatus} from "./store/const";
import {requireAuthorization} from "./store/actions";
import {redirect} from "./store/redirect";
import browserHistory from "./store/browser-history";
import {Router as BrowserRouter} from "react-router-dom";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect))
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>,
    document.getElementById(`root`)
);
