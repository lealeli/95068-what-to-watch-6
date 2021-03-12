import {ActionType} from './actions';
import {FILTER_DEFAULT} from "../components/const";

const initialState = {
  genre: FILTER_DEFAULT,
  films: [],
  isDataLoaded: false
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
  }
  return state;
};


export {reducer};
