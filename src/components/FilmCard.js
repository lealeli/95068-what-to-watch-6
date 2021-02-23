import React, {useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from "./VideoPlayer";

const FilmCard = ({name, link, videoLink, id, onMouseEnter, onMouseLeave, isStart}) => {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isStart) {
      setTimeout(() => setIsActive(true), 1000);
    } else {
      setIsActive(false);
    }
  }, [isStart]);

  console.log(name, isStart, isActive);

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      {isActive ?
        <VideoPlayer defaultIsPlaying={true} src={videoLink} link={link}/>
        :
        <div className="small-movie-card__image">
          <img src={link} alt={name} width="280" height="175"/>
        </div>
      }
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isStart: PropTypes.bool.isRequired,
};

export default FilmCard;
