import {NameSpace} from '../root-reducer';
import {createSelector} from "reselect";

export const getGenre = (state) => state[NameSpace.FILM].genre;
export const getFilms = (state) => state[NameSpace.FILM].films;
export const getPromoFilm = (state) => state[NameSpace.FILM].promoFilm;
export const getIsDataLoaded = (state) => state[NameSpace.FILM].isDataLoaded;
export const getActiveMove = (state) => state[NameSpace.FILM].activeMove;
export const getAddReview = (state) => state[NameSpace.FILM].addReview;
export const getPreparedFilms = createSelector(
    [getFilms, getGenre],
    (films, genre) => {
      return films.filter((elem) => (elem.genre === genre) || (genre === `All genres`));
    }
);
