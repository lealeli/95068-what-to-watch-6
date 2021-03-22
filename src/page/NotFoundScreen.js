import React, {useEffect, memo} from "react";
import {Link} from "react-router-dom";
import Auth from "../components/Auth";
import FilmList from "../components/FilmList";
import {fetchFilmsList} from "../store/api-actions";
import {connect} from "react-redux";
import LoadingScreen from "../components/LoadingScreen";
import PropTypes from "prop-types";
import {getFilmList} from "../store/films/selector";

const NotFoundScreen = ({filmList, onLoadData}) => {

  useEffect(() => {
    if (!filmList.isDataLoaded) {
      onLoadData();
    }
  }, [filmList.isDataLoaded]);

  if (!filmList.isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return <>
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">404. Page not found</h1>

        <Auth/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <FilmList films={filmList.films.slice(0, 8)}/>
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
};

NotFoundScreen.propTypes = {
  filmList: PropTypes.array.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({filmList: getFilmList(state)});

const mapDispatchToProps = (dispatch) => ({onLoadData: () => dispatch(fetchFilmsList())});

export {NotFoundScreen};

export default connect(mapStateToProps, mapDispatchToProps)(memo(NotFoundScreen));
