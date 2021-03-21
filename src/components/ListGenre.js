import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeGenreAction} from "../store/actions";
import {FILTER_DEFAULT} from "../store/const";
import {getFilmList, getGenre} from "../store/films/selector";

const ListGenre = ({filmList, genreActive, changeGenre}) => {

  const genres = [FILTER_DEFAULT, ...new Set(filmList.films.map((m) => m.genre))];

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
  filmList: PropTypes.object.isRequired,
  genreActive: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({filmList: getFilmList(state), genreActive: getGenre(state)});

const mapDispatchToProps = (dispatch) => ({
  changeGenre: (genre) => dispatch(changeGenreAction(genre))
});

export {ListGenre};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenre);
