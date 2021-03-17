import {ActionType} from './actions';
import {FILTER_DEFAULT, AuthorizationStatus} from '../components/const';

const initialState = {
  genre: FILTER_DEFAULT,
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  activeMove: {},
  addReview: {
    error: ``,
    isReviewPosting: false,
    filmId: null,
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
    case ActionType.START_LOAD_FILM:
      return {
        ...state,
        activeMove: {...state.activeMove, [action.payload]: {film: {}, isFetching: true}},
      };
    case ActionType.FINISH_LOAD_FILM:
      return {
        ...state,
        activeMove: {...state.activeMove, [action.payload.id]: {film: action.payload.film, isFetching: false}},
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.START_SEND_COMMENT:
      return {
        ...state,
        addReview: {filmId: action.payload, error: ``, isReviewPosting: true},
      };
    case ActionType.FINISH_SEND_COMMENT:
      return {
        ...state,
        addReview: {filmId: action.payload.id, error: action.payload.error, isReviewPosting: false},
      };
  }
  return state;
};

export {reducer};
