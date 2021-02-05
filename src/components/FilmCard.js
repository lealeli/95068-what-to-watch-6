import React from "react";
import PropTypes from 'prop-types';

const FilmCard = ({name, link}) => (
  <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={link} alt="Mindhunter" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{name}</a>
    </h3>
  </article>
);

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default FilmCard;
