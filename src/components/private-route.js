import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus} from '../store/const';
import {getAuthorizationStatus} from "../store/user/selector";
import {useSelector} from "react-redux";


const PrivateRoute = ({render, path, exact}) => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  if (authorizationStatus === AuthorizationStatus.WAIT) {
    return null;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default memo(PrivateRoute);
