import React, {useEffect, memo} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import FormReview from "../FormReview";
import Auth from "../Auth";
import LoadingScreen from "../LoadingScreen";
import {fetchFilm} from "../../store/api-actions";
import NotFoundScreen from "./NotFoundScreen";
import {getActiveMove} from "../../store/films/selector";

const AddReview = () => {
  const dispatch = useDispatch();
  const matchParams = useParams();

  const activeMove = useSelector(getActiveMove);
  const filmId = Number(matchParams.id);
  const filmLoader = activeMove[filmId];

  useEffect(() => {
    if (!filmLoader) {
      dispatch(fetchFilm(filmId));
    }
  }, [filmLoader]);

  if (!filmLoader || filmLoader.isFetching) {
    return <LoadingScreen />;
  }

  if (!filmLoader.film.id) {
    return <NotFoundScreen />;
  }

  const film = filmLoader.film;

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.background_image} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <Auth />

          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.poster_image} alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
          </div>
        </div>

        <FormReview id={film.id}/>

      </section>
    </>
  );
};


export default memo(AddReview);
