import {film} from "./film";
import {FILTER_DEFAULT} from "../const";
import {changeGenreAction, loadFilms, setComment, setFilm, setPromoFilm} from "../actions";

describe(`Корректная работа редьюсера film`, () => {
  it(`Обработка в редьюсере пустого action с несуществующим начальным стейтом`, () => {
    const expectedState = {
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

    expect(film(undefined, {}))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action changeGenreAction с несуществующим начальным стейтом`, () => {
    const expectedState = {
      genre: `testGenre`,
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

    expect(film(undefined, changeGenreAction(`testGenre`)))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action changeGenreAction с корректным стейтом`, () => {
    const initialState = {
      genre: `testGenre`,
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

    const expectedState = {
      genre: `testGenre1`,
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

    expect(film(initialState, changeGenreAction(`testGenre1`)))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action loadFilms с корректным стейтом`, () => {
    const initialState = {
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

    const expectedState = {
      genre: FILTER_DEFAULT,
      filmList: {
        films: [`testFilm1`, `testFilm2`, `testFilm3`],
        isDataLoaded: true,
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

    expect(film(initialState, loadFilms([`testFilm1`, `testFilm2`, `testFilm3`])))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action setFilm с корректным стейтом`, () => {
    const initialState = {
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

    const expectedState1 = {
      genre: FILTER_DEFAULT,
      filmList: {
        films: [],
        isDataLoaded: false,
      },
      activeMove: {1: {film: {name: `testFilm`}, isFetching: true}},
      addReview: {
        error: ``,
        isReviewPosting: false,
      },
      promoFilm: {
        film: {},
        isDataLoaded: false,
      },
    };

    expect(film(initialState, setFilm(1, {name: `testFilm`}, true)))
      .toEqual(expectedState1);

    const expectedState2 = {
      genre: FILTER_DEFAULT,
      filmList: {
        films: [],
        isDataLoaded: false,
      },
      activeMove: {
        1: {film: {name: `testFilm`}, isFetching: true},
        2: {film: {name: `testFilm2`, id: 2, url: `url`}, isFetching: false}
      },
      addReview: {
        error: ``,
        isReviewPosting: false,
      },
      promoFilm: {
        film: {},
        isDataLoaded: false,
      },
    };

    expect(film(expectedState1, setFilm(2, {name: `testFilm2`, id: 2, url: `url`}, false)))
      .toEqual(expectedState2);
  });

  it(`Обработка в редьюсере action setPromoFilm с корректным стейтом`, () => {
    const initialState = {
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

    const expectedState = {
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
        film: {name: `name`, id: 1, url: `url`},
        isDataLoaded: true,
      },
    };

    expect(film(initialState, setPromoFilm({name: `name`, id: 1, url: `url`})))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action setComment с корректным стейтом`, () => {
    const initialState = {
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

    const expectedState = {
      genre: FILTER_DEFAULT,
      filmList: {
        films: [],
        isDataLoaded: false,
      },
      activeMove: {},
      addReview: {
        error: `testError`,
        isReviewPosting: true,
      },
      promoFilm: {
        film: {},
        isDataLoaded: false,
      },
    };

    expect(film(initialState, setComment(`testError`, true)))
      .toEqual(expectedState);
  });
});
