import React from "react";
import PropTypes from "prop-types";
import {getRatingString} from "../utils/film";

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
      <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
        Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

      <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the
        sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously,
        Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {film.starring.map((elem) => (`${elem}, `))}
        and other</strong></p>
    </div>
  </>;
};

TabOverview.propTypes = {
  film: PropTypes.object.isRequired,
};

export default TabOverview;
