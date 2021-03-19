import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Tab from "../components/Tab";
import FilmList from "../components/FilmList";
import LoadingScreen from "../components/LoadingScreen";
import {fetchFilm, fetchFilmsList} from "../store/api-actions";
import Auth from "../components/Auth";
import NotFoundScreen from "./NotFoundScreen";
import {AuthorizationStatus} from "../store/const";
import {getActiveMove, getFilms, getIsDataLoaded} from "../store/films/selector";
import {getAuthorizationStatus} from "../store/user/selector";

const MoviePage = ({films = [], match, isDataLoaded, onLoadData, onLoadFilm, activeMove, authorizationStatus}) => {

  const filmId = Number(match.params.id);
  const filmLoader = activeMove[filmId];

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (!filmLoader) {
      onLoadFilm(filmId);
    }
  }, [filmLoader]);

  if (!isDataLoaded || !filmLoader || filmLoader.isFetching) {
    return <LoadingScreen />;
  }

  if (!filmLoader.film.id) {
    return <NotFoundScreen />;
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

            <Auth />

          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
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
              <img src={film.poster_image} alt="The Grand Budapest Hotel poster" width="218"
                height="327"/>
            </div>

            <Tab film={film}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={films.filter((elem) => (elem.genre === film.genre) && (elem.id !== film.id)).slice(0, 4)}/>

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

MoviePage.propTypes = {
  films: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
  activeMove: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({films: getFilms(state), isDataLoaded: getIsDataLoaded(state), activeMove: getActiveMove(state), authorizationStatus: getAuthorizationStatus(state)});

const mapDispatchToProps = (dispatch) => ({
  onLoadData: () => dispatch(fetchFilmsList()),
  onLoadFilm: (id) => dispatch(fetchFilm(id)),
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
