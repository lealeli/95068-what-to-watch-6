import React from 'react';
import PropTypes from 'prop-types';
import FilmList from "./FilmList";
import {Link} from "react-router-dom";

const Main = ({promoFilm: {name, gangre, year}, films}) =>
  <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
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

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{gangre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
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

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <Link to="#" className="catalog__genres-link">All genres</Link>
          </li>
          <li className="catalog__genres-item">
            <Link to="#" className="catalog__genres-link">Comedies</Link>
          </li>
          <li className="catalog__genres-item">
            <Link to="#" className="catalog__genres-link">Crime</Link>
          </li>
          <li className="catalog__genres-item">
            <Link to="#" className="catalog__genres-link">Documentary</Link>
          </li>
          <li className="catalog__genres-item">
            <Link to="#" className="catalog__genres-link">Dramas</Link>
          </li>
          <li className="catalog__genres-item">
            <Link to="#" className="catalog__genres-link">Horror</Link>
          </li>
          <li className="catalog__genres-item">
            <Link to="#" className="catalog__genres-link">Kids & Family</Link>
          </li>
          <li className="catalog__genres-item">
            <Link to="#" className="catalog__genres-link">Romance</Link>
          </li>
          <li className="catalog__genres-item">
            <Link to="#" className="catalog__genres-link">Sci-Fi</Link>
          </li>
          <li className="catalog__genres-item">
            <Link to="#" className="catalog__genres-link">Thrillers</Link>
          </li>
        </ul>

        <FilmList films={films}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
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

Main.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired
};

export default Main;
