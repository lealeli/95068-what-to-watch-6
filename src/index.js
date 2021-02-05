import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './data';

ReactDOM.render(
    <React.StrictMode>
      <App promoFilm={data.promoFilm} films={data.films} />
    </React.StrictMode>,
    document.getElementById(`root`)
);
