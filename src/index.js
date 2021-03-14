import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import axios from 'axios';
import App from './components/App';
import {reducer} from './store/reducer';
import data from './mocks/data';

const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
  withCredentials: true,
});

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api)),
);

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App promoFilm={data.promoFilm} />
      </React.StrictMode>
    </Provider>,
    document.getElementById(`root`)
);
