export const ActionType = {
  CHANGE_GENRE: `film/changeGenre`,
  LOAD_FILMS: `film/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_AUTHORIZATION_ERROR: `user/setAuthorizationError`,
  SET_USER_PROFILE: `user/setUserProfile`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  SET_FILM: `film/setFilm`,
  SET_COMMENT: `film/setComment`,
  SET_PROMO_FILM: `film/setPromoFilm`
};

export const changeGenreAction = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const setFilm = (id, film, isFetching) => ({
  type: ActionType.SET_FILM,
  payload: {id, film, isFetching}
});

export const setUserProfile = (profile) => ({
  type: ActionType.SET_USER_PROFILE,
  payload: profile
});

export const setAuthorizationError = (err) => ({
  type: ActionType.SET_AUTHORIZATION_ERROR,
  payload: err
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const setComment = (error, isReviewPosting) => ({
  type: ActionType.SET_COMMENT,
  payload: {error, isReviewPosting},
});

export const setPromoFilm = (film) => ({
  type: ActionType.SET_PROMO_FILM,
  payload: film
});
