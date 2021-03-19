import {ActionType} from './actions';
import {FILTER_DEFAULT, AuthorizationStatus} from './const';

const initialState = {
  genre: FILTER_DEFAULT,
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  activeMove: {},
  addReview: {
    error: ``,
    isReviewPosting: false,
  }
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
    case ActionType.SET_FILM:
      return {
        ...state,
        activeMove: {...state.activeMove, [action.payload.id]: {film: action.payload.film, isFetching: action.payload.isFetching}},
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_COMMENT:
      return {
        ...state,
        addReview: {error: action.payload.error, isReviewPosting: action.payload.isReviewPosting},
      };
  }
  return state;
};

export {reducer};
