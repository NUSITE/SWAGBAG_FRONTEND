import { ActionTypes } from "../../action-types";

export const UserLoginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_LOGGEDIN:
      return { user: payload };
    case ActionTypes.CLEAR_STORE:
      return { user: null };
    default:
      return state;
  }
};

export const TokenReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ACCESS_TOKEN:
      return { token: payload };
    case ActionTypes.CLEAR_STORE:
      return { token: null };
    default:
      return state;
  }
};

export const AuthorizationReducer = (
  state = { isAuth: false },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.AUTHORIZATION:
      return { isAuth: payload };
    case ActionTypes.CLEAR_STORE:
      return { isAuth: null };
    default:
      return state;
  }
};
