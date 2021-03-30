import {AuthorizationStatus} from "../const";
import {user} from "./user";
import {requireAuthorization} from "../actions";

const defaultState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  profile: {}
};

describe(`Корректная работа редьюсера user`, () => {
  it(`Обработка в редьюсере пустого action с несуществующим начальным стейтом`, () => {

    expect(user(undefined, {}))
      .toEqual(defaultState);
  });

  it(`Обработка в редьюсере action requireAuthorization с несуществующим начальным стейтом`, () => {
    const expectedState = {...defaultState, authorizationStatus: `testStatus`};

    expect(user(undefined, requireAuthorization(`testStatus`)))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action requireAuthorization с корректным стейтом`, () => {
    const initialState = {...defaultState, authorizationStatus: `testStatus1`};

    const expectedState = {...defaultState, authorizationStatus: `testStatus2`};

    expect(user(initialState, requireAuthorization(`testStatus2`)))
      .toEqual(expectedState);
  });
});
