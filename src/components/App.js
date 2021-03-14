import React from 'react';
import Main from './Main';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MyList from './MyList';
import MoviePage from './MoviePage';
import AddReview from './AddReview';
import Player from './Player';
import NotFoundScreen from './NotFoundScreen';
import PropTypes from 'prop-types';
import PrivateRoute from "../private-route/PrivateRoute";
import AuthScreen from "./AuthScreen";
import browserHistory from "../store/browser-history";


const App = (props) => {

  return (
    <>
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path="/">
            <Main promoFilm={props.promoFilm}/>
          </Route>
          <Route exact path="/login">
            <AuthScreen />
          </Route>
          <PrivateRoute
            exact
            path="/mylist"
            render={() => <MyList {...props}/>}
          >
          </PrivateRoute >
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
