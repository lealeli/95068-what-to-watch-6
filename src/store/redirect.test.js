import {redirect} from './redirect';
import {redirectToRoute} from "./actions";

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`./browser-history`, () => fakeHistory);

describe(`Тестирование middleware редиректа`, () => {
  it(`Нет редиректа для любых других action`, () => {
    const {invoke, next} = mockRedux();
    const action = redirectToRoute(`/`);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Успешный редирект на основе валидного action`, () => {
    const {invoke} = mockRedux();
    invoke(redirectToRoute(`/login`));
    expect(fakeHistory.location.pathname).toBe(`/login`);

    invoke(redirectToRoute(`/lose`));
    expect(fakeHistory.location.pathname).toBe(`/lose`);
  });

  it(`Нет ридеректа при не валидном action`, () => {
    const url = `/test-url`;
    const {invoke} = mockRedux();
    invoke({type: `TEST_ACTION`, payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
