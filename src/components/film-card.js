import React, {useState, memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "./video-player";

const FilmCard = ({name, previewImage, previewVideoLink, id}) => {

  const [isStart, setIsStart] = useState(false);

  const setActiveMovie = () => {
    setIsStart(true);
  };
  const cleanActiveMovie = () => {
    setIsStart(false);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={setActiveMovie} onMouseLeave={cleanActiveMovie}>
      <Link className="small-movie-card__link" to={`/films/${id}`}>
        <VideoPlayer src={previewVideoLink} poster={previewImage} isMuted={isStart} isPlaying={isStart}/>
        <h3 className="small-movie-card__title">{name}</h3>
      </Link>
    </article>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,

};

export default memo(FilmCard);
