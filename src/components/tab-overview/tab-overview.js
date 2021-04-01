import React, {memo} from "react";
import PropTypes from "prop-types";
import {getRatingString} from "../../utils/utils";

const TabOverview = ({film}) => {
  return <>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingString(film.rating)}</span>
        <span className="movie-rating__count">{film.scores_count} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{film.description}</p>

      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and other</strong></p>
    </div>
  </>;
};

TabOverview.propTypes = {
  film: PropTypes.object.isRequired,
};

export default memo(TabOverview);
