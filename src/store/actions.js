export const ActionType = {
  CHANGE_GENRE: `film/changeGenre`,
  GET_FILMS_BY_GENRE: `film/getFilmsByGenre`,
  LOAD_FILMS: `data/loadFilms`,
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
