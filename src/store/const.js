export const FILTER_DEFAULT = `All genres`;
export const COUNT_FILM_PAGE = 8;
export const COUNT_GENRE_LIST = 10;

export const AuthorizationStatus = {
  WAIT: `WAIT`,
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const FavoriteStatus = {
  ADD: `1`,
  REMOVE: `0`,
};

export const AppRoute = {
  LOGIN: `/login`,
  ROOT: `/`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
};
