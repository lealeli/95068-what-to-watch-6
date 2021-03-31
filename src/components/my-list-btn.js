import React, {memo} from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus, FavoriteStatus} from "../store/const";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorizationStatus} from "../store/user/selector";
import {setFavoriteStatus} from "../store/api-actions";

const MyListBtn = ({film}) => {
  const dispatch = useDispatch();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return null;
  }

  const handleOnSetFavoriteStatus = () => dispatch(setFavoriteStatus(film.id, film.is_favorite ? FavoriteStatus.REMOVE : FavoriteStatus.ADD));

  return <button className="btn btn--list movie-card__button" type="button"
    onClick={handleOnSetFavoriteStatus}>
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref={film.is_favorite ? `#in-list` : `#add`}/>
    </svg>
    <span>My list</span>
  </button>;
};

MyListBtn.propTypes = {
  film: PropTypes.object.isRequired,
};

export default memo(MyListBtn);
