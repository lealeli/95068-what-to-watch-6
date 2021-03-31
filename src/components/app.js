import React from "react";
import Main from "./page/main";
import {Route, Switch} from "react-router-dom";
import MyList from "./page/my-list";
import MoviePage from "./page/movie-page";
import AddReview from "./page/add-review";
import Player from "./page/player";
import NotFoundScreen from "./page/not-found-screen";
import PrivateRoute from "./private-route";
import AuthScreen from "./page/auth-screen";

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={AuthScreen} />
        <PrivateRoute exact path="/mylist" render={(prop) => <MyList {...prop} />} />
        <Route exact path="/films/:id" component={MoviePage} />
        <PrivateRoute exact path="/films/:id/review" render={(prop) => <AddReview {...prop} />} />
        <Route exact path="/player/:id" component={Player} />
        <Route component={NotFoundScreen} />
      </Switch>
    </>
  );
};

export default App;
