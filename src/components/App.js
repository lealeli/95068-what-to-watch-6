import React from "react";
import Main from "../page/Main";
import {Switch, Route} from "react-router-dom";
import MyList from "../page/MyList";
import MoviePage from "../page/MoviePage";
import AddReview from "./AddReview";
import Player from "../page/Player";
import NotFoundScreen from "../page/NotFoundScreen";
import PrivateRoute from "../private-route/PrivateRoute";
import AuthScreen from "../page/AuthScreen";

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <PrivateRoute exact path="/mylist" render={(prop) => <MyList {...prop} />} />
        <Route exact path="/films/:id" component={MoviePage} />
        <PrivateRoute exact path="/films/:id/review" render={(prop) => <AddReview {...prop} />} />
        <Route exact path="/player/:id" component={Player} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </>
  );
};

export default App;
