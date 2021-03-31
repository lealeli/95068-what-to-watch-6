import {combineReducers} from 'redux';
import {film} from './film/film';
import {user} from './user/user';

export const AppNS = {
  FILM: `FILM`,
  USER: `USER`
};

export default combineReducers({
  [AppNS.FILM]: film,
  [AppNS.USER]: user,
});
