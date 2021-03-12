import React from 'react';
import Main from './Main';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Login from './Login';
import MyList from './MyList';
import MoviePage from './MoviePage';
import AddReview from './AddReview';
import Player from './Player';
import NotFoundScreen from './NotFoundScreen';
import PropTypes from 'prop-types';

const App = (props) => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main promoFilm={props.promoFilm}/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/mylist">
            <MyList {...props}/>
          </Route>
          <Route exact path="/films/:id" render={(prop) => <MoviePage {...props} {...prop}/> } />
          <Route exact path="/films/:id/review" render={(prop) => <AddReview {...props} {...prop}/> } />
          <Route exact path="/player/:id" render={(prop) => <Player {...props} {...prop}/> } />
          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
};

export default App;
