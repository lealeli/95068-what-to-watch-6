import {combineReducers} from 'redux';
import {film} from './films/film';
import {user} from './user/user';

export const NameSpace = {
  FILM: `FILM`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.FILM]: film,
  [NameSpace.USER]: user,
});
