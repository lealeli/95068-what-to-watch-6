import {ActionType} from '../actions';
import {FILTER_DEFAULT} from '../const';

const initialState = {
  genre: FILTER_DEFAULT,
  films: [],
  isDataLoaded: false,
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


const film = (state = initialState, action) => {
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
    case ActionType.SET_PROMO_FILM:
      return {
        ...state,
        promoFilm: {film: action.payload, isDataLoaded: true},
      };
    case ActionType.SET_FILM:
      return {
        ...state,
        activeMove: {...state.activeMove, [action.payload.id]: {film: action.payload.film, isFetching: action.payload.isFetching}},
      };
    case ActionType.SET_COMMENT:
      return {
        ...state,
        addReview: {error: action.payload.error, isReviewPosting: action.payload.isReviewPosting},
      };
  }
  return state;
};

export {film};

