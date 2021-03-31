import React from "react";
import FilmList from "../film-list";
import Auth from "../auth";
import LoadingScreen from "../loading-screen";
import {Link} from "react-router-dom";
import {useApi} from "../../store/api-hook";

const MyList = () => {
  const [myList, isLoading] = useApi(`/favorite`);

  if (isLoading) {
    return <LoadingScreen />;
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

        <h1 className="page-title user-page__title">My list</h1>

        <Auth />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={myList}/>
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

MyList.propTypes = {

};

export default MyList;
