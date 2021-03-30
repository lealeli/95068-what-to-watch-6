import {AppNS} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[AppNS.USER].authorizationStatus;
export const getUserProfile = (state) => state[AppNS.USER].profile;
