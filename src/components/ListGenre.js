import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeGenreAction} from "../store/actions";
import {FILTER_DEFAULT} from "../store/const";
import {getFilms, getGenre} from "../store/films/selector";

const ListGenre = ({films, genreActive, changeGenre}) => {

  const genres = [FILTER_DEFAULT, ...new Set(films.map((m) => m.genre))];

  return <ul className="catalog__genres-list">
    {genres.map((elem) => {
      return (
        <li key={elem} className={`catalog__genres-item ${elem === genreActive && `catalog__genres-item--active`}`} onClick={() => changeGenre(elem)} >
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

const mapStateToProps = (state) => ({films: getFilms(state), genreActive: getGenre(state)});

const mapDispatchToProps = (dispatch) => ({
  changeGenre: (genre) => dispatch(changeGenreAction(genre))
});

export {ListGenre};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenre);
