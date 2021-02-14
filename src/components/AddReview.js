import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import FormReview from "./FormReview";

const AddReview = ({films, match}) => {
  const film = films.find((item) => item.id === Number(match.params.id));

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

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.poster_image} alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
          </div>
        </div>

        <FormReview/>

      </section>
    </>
  );
};

AddReview.propTypes = {
  films: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default AddReview;
