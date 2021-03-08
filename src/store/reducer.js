import {ActionType} from './actions';
import data from '../mocks/data';

const initialState = {
  genre: `All genres`,
  films: data.films,
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
        films: data.films.filter((elem) => (elem.genre === state.genre) || (state.genre === `All genres`))
      };
  }

  return state;
};


export {reducer};
