import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from "./VideoPlayer";

const FilmCard = ({name, previewImage, videoLink, id, isMuted, isPlaying, onMouseEnter, onMouseLeave}) => {

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <VideoPlayer src={videoLink} poster={previewImage} isMuted={isMuted} isPlaying={isPlaying}/>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default FilmCard;
