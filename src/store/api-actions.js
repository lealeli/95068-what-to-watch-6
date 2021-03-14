import {loadFilms} from "./actions";

export const fetchFilmsList = () => (dispatch, _getState, _api) => (
  _api.get(`/films`)
    .then(({data: filmData}) => dispatch(loadFilms(filmData)))
);
