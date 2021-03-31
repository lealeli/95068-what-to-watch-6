import {AppNS} from '../store';
import {createSelector} from "reselect";

export const getGenre = (state) => state[AppNS.FILM].genre;
export const getFilmList = (state) => state[AppNS.FILM].filmList;
export const getPromoFilm = (state) => state[AppNS.FILM].promoFilm;
export const getActiveMove = (state) => state[AppNS.FILM].activeMove;
export const getAddReview = (state) => state[AppNS.FILM].addReview;
export const getPreparedFilms = createSelector(
    [getFilmList, getGenre],
    (filmList, genre) => {
      return {
        films: filmList.films.filter((elem) => (elem.genre === genre) || (genre === `All genres`)),
        isDataLoaded: filmList.isDataLoaded,
      };
    }
);
