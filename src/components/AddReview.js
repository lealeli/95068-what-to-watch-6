import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FormReview from "./FormReview";
import Auth from "./Auth";
import LoadingScreen from "./LoadingScreen";
import {fetchFilm} from "../store/api-actions";
import NotFoundScreen from "../page/NotFoundScreen";

const AddReview = ({match, onLoadFilm, activeMove}) => {

  const filmId = Number(match.params.id);
  const filmLoader = activeMove[filmId];

  useEffect(() => {
    if (!filmLoader) {
      onLoadFilm(filmId);
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

AddReview.propTypes = {
  match: PropTypes.object.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
  activeMove: PropTypes.object.isRequired,
};

const mapStateToProps = ({activeMove}) => ({activeMove});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilm: (id) => dispatch(fetchFilm(id)),
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
