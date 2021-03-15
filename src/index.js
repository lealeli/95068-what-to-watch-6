import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import App from './components/App';
import {reducer} from './store/reducer';
import data from './mocks/data';
import {checkAuth} from './store/api-actions';
import {createAPI} from "./store/api";
import {AuthorizationStatus} from "./components/const";
import {requireAuthorization} from "./store/actions";
import {redirect} from "./store/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect))
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App promoFilm={data.promoFilm} />
      </React.StrictMode>
    </Provider>,
    document.getElementById(`root`)
);
