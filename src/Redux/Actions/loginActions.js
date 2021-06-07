import { ActionTypes } from "../../action-types";

export const setuserLoggedIn = (user) => {
  return {
    type: ActionTypes.USER_LOGGEDIN,
    payload: user,
  };
};

export const setAccessToken = (token) => {
  return {
    type: ActionTypes.ACCESS_TOKEN,
    payload: token,
  };
};

export const setAuthorization = (authorization) => {
  return {
    type: ActionTypes.AUTHORIZATION,
    payload: authorization,
  };
};

export const clearStore = () => {
  return {
    type: ActionTypes.CLEAR_STORE
  }
}
