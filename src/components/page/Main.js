import React, {useState, useEffect, memo} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import FilmList from "../FilmList";
import ListGenre from "../ListGenre";
import ShowMore from "../ShowMore";
import {COUNT_FILM_PAGE} from "../../store/const";
import LoadingScreen from "../LoadingScreen";
import {fetchFilmsList, fetchPromoFilm} from "../../store/api-actions";
import Auth from "../Auth";
import {getActiveMove, getPreparedFilms, getPromoFilm} from "../../store/films/selector";
import browserHistory from "../../store/browser-history";
import MyListBtn from "../MyListBtn";

const Main = () => {
  const dispatch = useDispatch();

  const promoFilmData = useSelector(getPromoFilm);
  const preparedFilms = useSelector(getPreparedFilms);
  const activeMove = useSelector(getActiveMove);

  const [count, setCount] = useState(COUNT_FILM_PAGE);

  useEffect(() => {
    if (!promoFilmData.isDataLoaded) {
      dispatch(fetchPromoFilm());
    }
  }, [promoFilmData.isDataLoaded]);

  useEffect(() => {
    if (!preparedFilms.isDataLoaded) {
      dispatch(fetchFilmsList());
    }
  }, [preparedFilms.isDataLoaded]);

  if (!preparedFilms.isDataLoaded || !promoFilmData.isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const promoFilm = activeMove[promoFilmData.filmId].film;

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoFilm.background_image} alt={promoFilm.name}/>
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

        <Auth />

      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoFilm.poster_image} alt={promoFilm.name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoFilm.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoFilm.genre}</span>
              <span className="movie-card__year">{promoFilm.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => browserHistory.push(`/player/${promoFilm.id}`)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <MyListBtn film={promoFilm}/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListGenre/>

        <FilmList films={preparedFilms.films.slice(0, count)}/>

        <ShowMore length={preparedFilms.films.length} count={count} onClick={() => setCount((prevState) => prevState + COUNT_FILM_PAGE)}/>
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
  </>;

};

export default memo(Main);
