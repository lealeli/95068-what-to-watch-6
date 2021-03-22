import React, {useState, memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const FilmCard = ({name, previewImage, previewVideoLink, id}) => {

  const [isStart, setIsStart] = useState(false);

  const setActiveMovie = () => {
    setIsStart(true);
  };
  const cleanActiveMovie = () => {
    setIsStart(false);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={setActiveMovie} onMouseLeave={cleanActiveMovie} >
      <VideoPlayer src={previewVideoLink} poster={previewImage} isMuted={isStart} isPlaying={isStart}/>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
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
