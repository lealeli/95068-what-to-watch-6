import {ActionType} from './actions';
import {data} from '../mocks/data';

const initialState = {
  genre: ``,
  films: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        films: action.payload
      };
  }

  return state;
};


export {reducer};
