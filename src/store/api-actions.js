import {
  loadFilms,
  redirectToRoute,
  requireAuthorization,
  setFilm,
  setComment,
  setPromoFilm, setUserProfile, setAuthorizationError
} from "./actions";
import {AuthorizationStatus} from "./const";
import browserHistory from "./browser-history";

export const fetchFilmsList = () => (dispatch, _getState, _api) => (
  _api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, _api) => (
  _api.get(`/films/promo`)
    .then(({data}) => dispatch(setPromoFilm(data)))
);

export const fetchFilm = (id) => (dispatch, _getState, _api) => {
  dispatch(setFilm(id, {}, true));
  return _api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(setFilm(id, data, false));
    })
    .catch(() => {
      dispatch(setFilm(id, {}, false));
    });
};

export const checkAuth = () => (dispatch, _getState, _api) => (
  _api.get(`/login`)
    .then(({data}) => dispatch(setUserProfile(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const doLogin = ({login: email, password}) => (dispatch, _getState, _api) => (
  _api.post(`/login`, {email, password})
    .then(({data}) => dispatch(setUserProfile(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch((error) => dispatch(setAuthorizationError(error.response.data.error)))
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

export const setFavoriteStatus = (id, status) => (dispatch, _getState, _api) => {
  return _api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      dispatch(setFilm(id, data, false));
    });
};
