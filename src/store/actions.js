export const ActionType = {
  CHANGE_GENRE: `film/changeGenre`,
  GET_FILMS_BY_GENRE: `film/getFilmsByGenre`,
  LOAD_FILMS: `data/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  START_LOAD_FILM: `data/startLoadFilm`,
  FINISH_LOAD_FILM: `data/finishLoadFilm`,
};

export const changeGenreAction = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const finishLoadFilm = (id, film) => ({
  type: ActionType.FINISH_LOAD_FILM,
  payloadId: id,
  payloadFilm: film
});

export const startLoadFilm = (id) => ({
  type: ActionType.START_LOAD_FILM,
  payload: id
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});
