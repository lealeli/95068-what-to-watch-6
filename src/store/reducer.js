import {ActionType} from './actions';
import data from '../mocks/data';

export const FILTER_DEFAULT = `All genres`;
export const COUNT_FILM_PAGE = 8;

const initialState = {
  genre: FILTER_DEFAULT,
  films: data.films,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
  }
  return state;
};


export {reducer};
