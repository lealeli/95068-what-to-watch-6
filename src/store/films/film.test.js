import {film} from "./film";
import {FILTER_DEFAULT} from "../const";
import {changeGenreAction, loadFilms, setComment, setFilm, setPromoFilm} from "../actions";

const defaultState = {
  genre: FILTER_DEFAULT,
  filmList: {
    films: [],
    isDataLoaded: false,
  },
  activeMove: {},
  addReview: {
    error: ``,
    isReviewPosting: false,
  },
  promoFilm: {
    film: {},
    isDataLoaded: false,
  },
};

describe(`Корректная работа редьюсера film`, () => {
  it(`Обработка в редьюсере пустого action с несуществующим начальным стейтом`, () => {
    expect(film(undefined, {}))
      .toEqual(defaultState);
  });

  it(`Обработка в редьюсере action changeGenreAction с несуществующим начальным стейтом`, () => {
    const expectedState = {...defaultState, genre: `testGenre`};

    expect(film(undefined, changeGenreAction(`testGenre`)))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action changeGenreAction с корректным стейтом`, () => {
    const initialState = {...defaultState, genre: `testGenre`};
    const expectedState = {...defaultState, genre: `testGenre1`};

    expect(film(initialState, changeGenreAction(`testGenre1`)))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action loadFilms с корректным стейтом`, () => {
    const expectedState = {...defaultState, filmList: {
      films: [`testFilm1`, `testFilm2`, `testFilm3`],
      isDataLoaded: true,
    }};

    expect(film(defaultState, loadFilms([`testFilm1`, `testFilm2`, `testFilm3`])))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action setFilm с корректным стейтом`, () => {
    const expectedState1 = {...defaultState, activeMove: {
      1: {film: {name: `testFilm`}, isFetching: true}
    }};

    expect(film(defaultState, setFilm(1, {name: `testFilm`}, true)))
      .toEqual(expectedState1);

    const expectedState2 = {...defaultState, activeMove: {
      1: {film: {name: `testFilm`}, isFetching: true},
      2: {film: {name: `testFilm2`, id: 2, url: `url`}, isFetching: false}
    }};

    expect(film(expectedState1, setFilm(2, {name: `testFilm2`, id: 2, url: `url`}, false)))
      .toEqual(expectedState2);
  });

  it(`Обработка в редьюсере action setPromoFilm с корректным стейтом`, () => {
    const expectedState = {...defaultState, promoFilm: {
      film: {name: `name`, id: 1, url: `url`},
      isDataLoaded: true,
    }};

    expect(film(defaultState, setPromoFilm({name: `name`, id: 1, url: `url`})))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action setComment с корректным стейтом`, () => {
    const expectedState = {...defaultState, addReview: {
      error: `testError`,
      isReviewPosting: true,
    }};

    expect(film(defaultState, setComment(`testError`, true)))
      .toEqual(expectedState);
  });
});
