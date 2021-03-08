import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/App';
import data from './mocks/data';
import {reducer} from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App promoFilm={data.promoFilm} films={data.films} />
      </React.StrictMode>
    </Provider>,
    document.getElementById(`root`)
);
