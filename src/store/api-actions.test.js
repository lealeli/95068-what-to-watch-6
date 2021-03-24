import MockAdapter from 'axios-mock-adapter';
import {checkAuth, fetchFilm, fetchFilmsList, fetchPromoFilm, sendComment, setFavoriteStatus} from "./api-actions";
import {createAPI} from "./api";
import {loadFilms, requireAuthorization, setComment, setFilm, setPromoFilm} from "./actions";
import {AuthorizationStatus, FavoriteStatus} from "./const";

const api = createAPI();

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testMethod = fetchFilmsList();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return testMethod(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, loadFilms([{fake: true}]));
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testMethod = fetchPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return testMethod(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, setPromoFilm([{fake: true}]));
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 12;
    const testMethod = fetchFilm(fakeFilmId);

    apiMock
      .onGet(`/films/${fakeFilmId}`)
      .reply(200, [{fake: true}]);


    return testMethod(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, setFilm(fakeFilmId, {}, true));
          expect(dispatch).toHaveBeenNthCalledWith(2, setFilm(fakeFilmId, [{fake: true}], false));
        });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testMethod = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200);

    return testMethod(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, requireAuthorization(AuthorizationStatus.AUTH));
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 15;
    const testMethod = sendComment(fakeFilmId, `qwe`, 5);

    apiMock
      .onPost(`/comments/${fakeFilmId}`, {comment: `qwe`, rating: 5})
      .reply(200, [{fake: true}]);


    return testMethod(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, setComment(``, true));
        expect(dispatch).toHaveBeenNthCalledWith(2, setComment(``, false));
      });
  });

  it(`Should make a bad API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 15;
    const testMethod = sendComment(fakeFilmId, `qwe`, 5);

    apiMock
      .onPost(`/comments/${fakeFilmId}`, {comment: `qwe`, rating: 5})
      .reply(400, [{fake: true}]);


    return testMethod(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, setComment(``, true));
        expect(dispatch).toHaveBeenNthCalledWith(2, setComment(`Request failed with status code 400`, false));
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 99;
    const testMethod = setFavoriteStatus(fakeFilmId, FavoriteStatus.ADD);

    apiMock
      .onPost(`/favorite/${fakeFilmId}/1`)
      .reply(200);

    return testMethod(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });
});
