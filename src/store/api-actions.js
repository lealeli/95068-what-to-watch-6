import {
  loadFilms,
  redirectToRoute,
  requireAuthorization,
  finishLoadFilm,
  startLoadFilm,
  startSendComment, finishSendComment
} from "./actions";
import {AuthorizationStatus} from "../components/const";
import browserHistory from "./browser-history";

export const fetchFilmsList = () => (dispatch, _getState, _api) => (
  _api.get(`/films`)
    .then(({data: filmData}) => dispatch(loadFilms(filmData)))
);

export const fetchFilm = (id) => (dispatch, _getState, _api) => {
  dispatch(startLoadFilm(id));
  return _api.get(`/films/${id}`)
    .then((response) => {
      dispatch(finishLoadFilm(id, response.data));
    })
    .catch(() => {
      dispatch(finishLoadFilm(id, {}));
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
  dispatch(startSendComment(id));
  return _api.post(`/comments/${id}`, {comment, rating})
    .then(() => {
      dispatch(finishSendComment(id, ``));
      browserHistory.push(`/films/${id}`);
    })
    .catch((error) => {
      dispatch(finishSendComment(id, error.message));
    });
};
