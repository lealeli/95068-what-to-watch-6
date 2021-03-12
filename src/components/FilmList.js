import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from './FilmCard';

const FilmList = ({films}) => {

  return (
    <div className="catalog__movies-list">
      {films.map((elem) => {

        return (
          <FilmCard
            key={elem.id}
            name={elem.name}
            previewImage={elem.preview_image}
            previewVideoLink={elem.preview_video_link}
            id={elem.id}
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
