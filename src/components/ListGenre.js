import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from "../store/actions";

const ListGenre = ({films, genreActive, changeGenre}) => {

  const genres = new Set([`All genres`]);
  films.forEach((elem) => genres.add(elem.genre));


  return <ul className="catalog__genres-list">
    {[...genres].map((elem, index) => {
      return (
        <li key={index} className={`catalog__genres-item ${elem === genreActive && `catalog__genres-item--active`}`} onClick={() => changeGenre(elem)} >
          <Link to="#" className="catalog__genres-link">{elem}</Link>
        </li>);
    })}
  </ul>;
};

ListGenre.propTypes = {
  films: PropTypes.array.isRequired,
  genreActive: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genreActive: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilmsByGenre());
  },
});

export {ListGenre};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenre);
