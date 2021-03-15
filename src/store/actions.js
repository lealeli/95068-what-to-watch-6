export const ActionType = {
  CHANGE_GENRE: `film/changeGenre`,
  GET_FILMS_BY_GENRE: `film/getFilmsByGenre`,
  LOAD_FILMS: `data/loadFilms`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
};

export const changeGenreAction = (genre) => {
  return {
    type: ActionType.CHANGE_GENRE,
    payload: genre
  };
};

export const loadFilms = (films) => {
  return {
    type: ActionType.LOAD_FILMS,
    payload: films
  };
};

export const requireAuthorization = (status) => {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  };
};

export const redirectToRoute = (url) => {
  return {
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  };
};
