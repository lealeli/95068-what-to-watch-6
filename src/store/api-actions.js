import {
  loadFilms,
  redirectToRoute,
  requireAuthorization,
  setFilm,
  setComment
} from "./actions";
import {AuthorizationStatus} from "../components/const";
import browserHistory from "./browser-history";

export const fetchFilmsList = () => (dispatch, _getState, _api) => (
  _api.get(`/films`)
    .then(({data: filmData}) => dispatch(loadFilms(filmData)))
);

export const fetchFilm = (id) => (dispatch, _getState, _api) => {
  dispatch(setFilm(id, {}, true));
  return _api.get(`/films/${id}`)
    .then((response) => {
      dispatch(setFilm(id, response.data, false));
    })
    .catch(() => {
      dispatch(setFilm(id, {}, false));
    });
};

export const checkAuth = () => (dispatch, _getState, _api) => (
  _api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, _api) => (
  _api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const sendComment = (id, comment, rating) => (dispatch, _getState, _api) => {
  dispatch(setComment(``, true));
  return _api.post(`/comments/${id}`, {comment, rating})
    .then(() => {
      dispatch(setComment(``, false));
      browserHistory.push(`/films/${id}`);
    })
    .catch((error) => {
      dispatch(setComment(error.message, false));
    });
};
