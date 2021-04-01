import {AppNS} from '../store';

export const getAuthorizationStatus = (state) => state[AppNS.USER].authorizationStatus;
export const getAuthorizationError = (state) => state[AppNS.USER].authorizationError;
export const getUserProfile = (state) => state[AppNS.USER].profile;
