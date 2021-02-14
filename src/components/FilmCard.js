import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const FilmCard = ({name, link, id, onMouseEnter, onMouseLeave}) => (
  <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
    <div className="small-movie-card__image">
      <img src={link} alt="Mindhunter" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
    </h3>
  </article>
);

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default FilmCard;
