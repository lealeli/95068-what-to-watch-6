import {ActionType} from '../actions';
import {AuthorizationStatus} from '../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.WAIT,
  authorizationError: ``,
  profile: {}
};


const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case ActionType.SET_AUTHORIZATION_ERROR:
      return {
        ...state,
        authorizationError: action.payload,
      };
  }
  return state;
};

export {user};
