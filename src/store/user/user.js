import {ActionType} from '../actions';
import {AuthorizationStatus} from '../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.WAIT,
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
  }
  return state;
};

export {user};
