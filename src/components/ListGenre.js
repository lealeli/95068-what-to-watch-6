import React, {memo} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeGenreAction} from "../store/actions";
import {FILTER_DEFAULT} from "../store/const";
import {getFilmList, getGenre} from "../store/films/selector";

const ListGenre = () => {
  const dispatch = useDispatch();

  const genreActive = useSelector(getGenre);
  const filmList = useSelector(getFilmList);

  const genres = [FILTER_DEFAULT, ...new Set(filmList.films.map((m) => m.genre))];

  return <ul className="catalog__genres-list">
    {genres.map((elem) => {
      return (
        <li key={elem} className={`catalog__genres-item ${elem === genreActive && `catalog__genres-item--active`}`} onClick={() => dispatch(changeGenreAction(elem))} >
          <Link to="#" className="catalog__genres-link">{elem}</Link>
        </li>);
    })}
  </ul>;
};


export default memo(ListGenre);
