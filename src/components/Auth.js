import React, {memo} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../store/const";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../store/user/selector";

const Auth = ({authorizationStatus}) => {

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <div className="user-block">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
      </div>
    </div>;
  }

  return <div className="user-block">
    <Link to="/login" className="user-block__link">Sign in</Link>
  </div>;
};

Auth.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({authorizationStatus: getAuthorizationStatus(state)});

export {Auth};
export default connect(mapStateToProps)(memo(Auth));
