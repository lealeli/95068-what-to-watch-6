export const ActionType = {
  CHANGE_GENRE: `film/changeGenre`,
  GET_FILMS_BY_GENRE: `film/getFilmsByGenre`,
  INC_COUNT: `film/incCount`,
  RESET_COUNT: `film/reset`,
};

export const changeGenreAction = (genre) => {
  return {
    type: ActionType.CHANGE_GENRE,
    payload: genre
  };
};

export const incLoadFilms = (count) => {
  return {
    type: ActionType.INC_COUNT,
    payload: count
  };
};

export const resetCount = () => {
  return {
    type: ActionType.RESET_COUNT,
  };
};
