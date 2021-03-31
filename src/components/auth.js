import React, {memo} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../store/const";
import {getAuthorizationStatus, getUserProfile} from "../store/user/selector";

const Auth = () => {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const profile = useSelector(getUserProfile);

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <div className="user-block">
      <div className="user-block__avatar">
        <Link to="/mylist" className="user-block__link">
          <img src={profile.avatar_url} alt={`User ${profile.name}`} width="63" height="63"/>
        </Link>
      </div>
    </div>;
  }

  return <div className="user-block">
    <Link to="/login" className="user-block__link">Sign in</Link>
  </div>;
};

export default memo(Auth);
