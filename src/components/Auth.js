import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../store/const";
import PropTypes from "prop-types";

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

const mapStateToProps = ({authorizationStatus}) => ({authorizationStatus});

export {Auth};
export default connect(mapStateToProps)(Auth);
