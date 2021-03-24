import {AuthorizationStatus} from "../const";
import {user} from "./user";
import {requireAuthorization} from "../actions";

describe(`Корректная работа редьюсера user`, () => {
  it(`Обработка в редьюсере пустого action с несуществующим начальным стейтом`, () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    expect(user(undefined, {}))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action requireAuthorization с несуществующим начальным стейтом`, () => {
    const expectedState = {
      authorizationStatus: `testStatus`,
    };

    expect(user(undefined, requireAuthorization(`testStatus`)))
      .toEqual(expectedState);
  });

  it(`Обработка в редьюсере action requireAuthorization с корректным стейтом`, () => {
    const initialState = {
      authorizationStatus: `testStatus1`,
    };

    const expectedState = {
      authorizationStatus: `testStatus2`,
    };

    expect(user(initialState, requireAuthorization(`testStatus2`)))
      .toEqual(expectedState);
  });
});
