import React from "react";
import Main from "../page/main/main";
import {Route, Switch} from "react-router-dom";
import MyList from "../page/my-list/my-list";
import MoviePage from "../page/movie-page/movie-page";
import AddReview from "../page/add-review/add-review";
import Player from "../page/player/player";
import NotFoundScreen from "../page/not-found/not-found";
import PrivateRoute from "../private-route/private-route";
import AuthScreen from "../page/login/login";
import {AppRoute} from "../../store/const";

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={Main}/>
        <Route exact path={AppRoute.LOGIN} component={AuthScreen}/>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={(prop) => <MyList {...prop} />}/>
        <Route exact path={AppRoute.FILM} component={MoviePage}/>
        <PrivateRoute exact path={AppRoute.ADD_REVIEW} render={(prop) => <AddReview {...prop} />}/>
        <Route exact path={AppRoute.PLAYER} component={Player}/>
        <Route component={NotFoundScreen}/>
      </Switch>
    </>
  );
};

export default App;
