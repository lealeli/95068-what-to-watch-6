import React from 'react';
import Main from "./Main";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Login from "./Login";
import MyList from "./MyList";
import MoviePage from "./MoviePage";
import AddReview from "./AddReview";
import Player from "./Player";
import NotFoundScreen from "./NotFoundScreen";

const App = (props) => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main {...props}/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/mylist">
            <MyList />
          </Route>
          <Route exact path="/films/:id">
            <MoviePage />
          </Route>
          <Route exact path="/films/:id/review">
            <AddReview />
          </Route>
          <Route exact path="/player/:id">
            <Player />
          </Route>
          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
