import {ActionType} from '../actions';
import {FILTER_DEFAULT} from '../const';

const initialState = {
  genre: FILTER_DEFAULT,
  filmList: {
    films: [],
    isDataLoaded: false,
  },
  activeMove: {},
  addReview: {
    error: ``,
    isReviewPosting: false,
  },
  promoFilm: {
    filmId: 0,
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
        filmList: {films: action.payload, isDataLoaded: true},
      };
    case ActionType.SET_PROMO_FILM:
      return {
        ...state,
        promoFilm: {filmId: action.payload.id, isDataLoaded: true},
        activeMove: {...state.activeMove, [action.payload.id]: {film: action.payload, isFetching: false}},
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

