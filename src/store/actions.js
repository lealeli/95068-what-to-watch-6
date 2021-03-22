export const ActionType = {
  CHANGE_GENRE: `film/changeGenre`,
  GET_FILMS_BY_GENRE: `film/getFilmsByGenre`,
  LOAD_FILMS: `film/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
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
