import {
  changeGenreAction,
  loadFilms,
  setFilm,
  requireAuthorization,
  redirectToRoute,
  setComment,
  setPromoFilm,
  ActionType
} from './actions';

describe(`Action creators work correctly`, () => {
  it(`Create action changeGenreAction`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `testGenre`,
    };

    expect(changeGenreAction(`testGenre`)).toEqual(expectedAction);
  });

  it(`Create action loadFilms`, () => {
    const testFilms = [`filmObject1`, `filmObject2`, `filmObject3`];

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: testFilms,
    };

    expect(loadFilms(testFilms)).toEqual(expectedAction);
  });

  it(`Create action setFilm`, () => {
    const expectedAction = {
      type: ActionType.SET_FILM,
      payload: {id: 1, film: {name: `testFilm`}, isFetching: true},
    };

    expect(setFilm(1, {name: `testFilm`}, true)).toEqual(expectedAction);
  });

  it(`Create action requireAuthorization`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `testStatus`,
    };

    expect(requireAuthorization(`testStatus`)).toEqual(expectedAction);
  });

  it(`Create action redirectToRoute`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `testUrl`,
    };

    expect(redirectToRoute(`testUrl`)).toEqual(expectedAction);
  });

  it(`Create action setComment`, () => {
    const expectedAction = {
      type: ActionType.SET_COMMENT,
      payload: {error: `testError`, isReviewPosting: true},
    };

    expect(setComment(`testError`, true)).toEqual(expectedAction);
  });

  it(`Create action setPromoFilm`, () => {
    const testPromoFilm = {
      name: `name`,
      id: 1,
      url: `url`
    };

    const expectedAction = {
      type: ActionType.SET_PROMO_FILM,
      payload: testPromoFilm,
    };

    expect(setPromoFilm(testPromoFilm)).toEqual(expectedAction);
  });

});
