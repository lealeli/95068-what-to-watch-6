import {ActionType} from './actions';
import {FILTER_DEFAULT, AuthorizationStatus} from '../components/const';

const initialState = {
  genre: FILTER_DEFAULT,
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  activeMove: {},
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true
      };
    case ActionType.START_LOAD_FILM:
      return {
        ...state,
        activeMove: {...state.activeMove, [action.payload]: {film: {}, isFetching: true}},
      };
    case ActionType.FINISH_LOAD_FILM:
      return {
        ...state,
        activeMove: {...state.activeMove, [action.payloadId]: {film: action.payloadFilm, isFetching: false}},
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }
  return state;
};

export {reducer};
