import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from "./FilmCard";

const Main = (props) => {

  const films = [
    {"id": 0, "name": `Fantastic Beasts: The Crimes of Grindelwal`, "poster_image": `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`},
    {"id": 1, "name": `Bohemian Rhapsody`, "poster_image": `img/bohemian-rhapsody.jpg`},
    {"id": 2, "name": `Macbeth`, "poster_image": `img/macbeth.jpg`},
    {"id": 3, "name": `Aviator`, "poster_image": `img/aviator.jpg`},
    {"id": 4, "name": `We need to talk about Kevin`, "poster_image": `img/we-need-to-talk-about-kevin.jpg`},
    {"id": 5, "name": `What We Do in the Shadows`, "poster_image": `img/what-we-do-in-the-shadows.jpg`},
    {"id": 6, "name": `Revenant`, "poster_image": `img/revenant.jpg`},
    {"id": 7, "name": `Johnny English`, "poster_image": `img/johnny-english.jpg`},
    {"id": 8, "name": `Shutter Island`, "poster_image": `img/shutter-island.jpg`},
    {"id": 9, "name": `Pulp Fiction`, "poster_image": `img/pulp-fiction.jpg`},
    {"id": 10, "name": `No Country for Old Men`, "poster_image": `img/no-country-for-old-men.jpg`},
    {"id": 11, "name": `Snatch`, "poster_image": `img/snatch.jpg`},
    {"id": 12, "name": `Moonrise Kingdom`, "poster_image": `img/moonrise-kingdom.jpg`},
    {"id": 13, "name": `Seven Years in Tibet`, "poster_image": `img/seven-years-in-tibet.jpg`},
    {"id": 14, "name": `Midnight Special`, "poster_image": `img/midnight-special.jpg`},
    {"id": 15, "name": `War of the Worlds`, "poster_image": `img/war-of-the-worlds.jpg`},
    {"id": 16, "name": `Dardjeeling Limited`, "poster_image": `img/dardjeeling-limited.jpg`},
    {"id": 17, "name": `Orlando`, "poster_image": `img/orlando.jpg`},
    {"id": 18, "name": `Mindhunter`, "poster_image": `img/mindhunter.jpg`},
    {"id": 19, "name": `Midnight Special`, "poster_image": `img/midnight-special.jpg`}
  ];

  return (
    <React.Fragment>

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
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
              <h2 className="movie-card__title">{props.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{props.gangre}</span>
                <span className="movie-card__year">{props.year}</span>
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
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__movies-list">
            {films.map((elem) => <FilmCard key={elem.id} name={elem.name} link={elem.poster_image}/>)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  name: PropTypes.string.isRequired,
  gangre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default Main;
