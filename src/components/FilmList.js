import React, {useState} from "react";
import PropTypes from 'prop-types';
import FilmCard from "./FilmCard";

const FilmList = ({films}) => {
  const [filmId, setFilmId] = useState(null);

  return (
    <>
      <div className="catalog__movies-list">
        {films.map((elem) => <FilmCard key={elem.id} name={elem.name} link={elem.preview_image}
          isStart={elem.id === filmId} videoLink={elem.video_link} id={elem.id}
          onMouseEnter={() => {
            setFilmId(elem.id);
          }} onMouseLeave={() => {
            setFilmId(null);
          }}/>)}
      </div>
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired
};

export default FilmList;
