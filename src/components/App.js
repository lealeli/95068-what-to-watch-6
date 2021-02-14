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

export default App;
