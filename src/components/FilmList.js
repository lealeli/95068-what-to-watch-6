import React, {useState} from "react";
import PropTypes from 'prop-types';
import FilmCard from "./FilmCard";

const FilmList = ({films}) => {
  const [, setFilm] = useState(null);

  return (
    <>
      <div className="catalog__movies-list">
        {films.map((elem) => <FilmCard key={elem.id} name={elem.name} link={elem.preview_image} id={elem.id} onMouseEnter={() => {
          setFilm(elem.id);
        }} onMouseLeave={() => {
          setFilm(null);
        }}/>)}
      </div>
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired
};

export default FilmList;
