import React, {useState} from "react";
import PropTypes from 'prop-types';
import FilmCard from "./FilmCard";

const FilmList = ({films}) => {
  const [filmId, setFilmId] = useState(null);

  return (
    <div className="catalog__movies-list">
      {films.map((elem) => {
        const setActiveMovie = () => setFilmId(elem.id);
        const cleanActiveMovie = () => setFilmId(null);

        return (
          <FilmCard
            key={elem.id}
            name={elem.name}
            previewImage={elem.preview_image}
            previewVideoLink={elem.preview_video_link}
            id={elem.id}
            isMuted={filmId === elem.id}
            isPlaying={filmId === elem.id}
            onMouseEnter={setActiveMovie}
            onMouseLeave={cleanActiveMovie}
          />
        );
      })}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired
};

export default FilmList;
