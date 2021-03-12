export const ActionType = {
  CHANGE_GENRE: `film/changeGenre`,
  GET_FILMS_BY_GENRE: `film/getFilmsByGenre`,
};

export const changeGenreAction = (genre) => {
  return {
    type: ActionType.CHANGE_GENRE,
    payload: genre
  };
};
