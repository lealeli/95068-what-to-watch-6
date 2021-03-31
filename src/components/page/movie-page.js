import React, {memo, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Tab from "../tab";
import FilmList from "../film-list";
import LoadingScreen from "../loading-screen";
import {fetchFilm, fetchFilmsList} from "../../store/api-actions";
import Auth from "../auth";
import NotFoundScreen from "./not-found-screen";
import {AuthorizationStatus} from "../../store/const";
import {getActiveMove, getFilmList} from "../../store/film/selector";
import {getAuthorizationStatus} from "../../store/user/selector";
import browserHistory from "../../store/browser-history";
import MyListBtn from "../my-list-btn";

const MoviePage = () => {
  const dispatch = useDispatch();
  const matchParams = useParams();

  const filmList = useSelector(getFilmList);
  const activeMove = useSelector(getActiveMove);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const filmId = Number(matchParams.id);
  const filmLoader = activeMove[filmId];

  useEffect(() => {
    if (!filmList.isDataLoaded) {
      dispatch(fetchFilmsList());
    }
  }, [filmList.isDataLoaded]);

  useEffect(() => {
    if (!filmLoader) {
      dispatch(fetchFilm(filmId));
    }
  }, [filmLoader]);

  if (!filmList.isDataLoaded || !filmLoader || filmLoader.isFetching) {
    return <LoadingScreen/>;
  }

  if (!filmLoader.film.id) {
    return <NotFoundScreen/>;
  }

  const film = filmLoader.film;

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.background_image} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <Auth/>

          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={() => browserHistory.push(`/player/${film.id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListBtn film={film}/>
                {
                  (authorizationStatus === AuthorizationStatus.AUTH) &&
                  <Link to={`/films/${film.id}/review`} className="btn movie-card__button">Add review</Link>
                }

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.poster_image} alt={`${film.name} poster`} width="218"
                height="327"/>
            </div>

            <Tab film={film}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList
            films={filmList.films.filter((elem) => (elem.genre === film.genre) && (elem.id !== film.id)).slice(0, 4)}/>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default memo(MoviePage);
