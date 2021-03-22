import React, {useState, useEffect, memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import FilmList from "../components/FilmList";
import ListGenre from "../components/ListGenre";
import ShowMore from "../components/ShowMore";
import {COUNT_FILM_PAGE} from "../store/const";
import LoadingScreen from "../components/LoadingScreen";
import {fetchFilmsList, fetchPromoFilm} from "../store/api-actions";
import Auth from "../components/Auth";
import {getPreparedFilms, getPromoFilm} from "../store/films/selector";
import browserHistory from "../store/browser-history";

const Main = ({promoFilm, onLoadPromoFilm, preparedFilms, onLoadData}) => {
  const [count, setCount] = useState(COUNT_FILM_PAGE);

  useEffect(() => {
    if (!promoFilm.isDataLoaded) {
      onLoadPromoFilm();
    }
  }, [promoFilm.isDataLoaded]);

  useEffect(() => {
    if (!preparedFilms.isDataLoaded) {
      onLoadData();
    }
  }, [preparedFilms.isDataLoaded]);

  if (!preparedFilms.isDataLoaded || !promoFilm.isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoFilm.film.background_image} alt={promoFilm.film.name}/>
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
            <img src={promoFilm.film.poster_image} alt={promoFilm.film.name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoFilm.film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoFilm.film.genre}</span>
              <span className="movie-card__year">{promoFilm.film.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => browserHistory.push(`/player/${promoFilm.film.id}`)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
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

Main.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  preparedFilms: PropTypes.object.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onLoadPromoFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
  preparedFilms: getPreparedFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadPromoFilm: () => dispatch(fetchPromoFilm()),
  onLoadData: () => dispatch(fetchFilmsList())
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Main));
