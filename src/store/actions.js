export const ActionType = {
  CHANGE_GENRE: `film/changeGenre`,
  GET_FILMS_BY_GENRE: `film/getFilmsByGenre`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  getFilmsByGenre: () => ({
    type: ActionType.GET_FILMS_BY_GENRE,
  })
};
