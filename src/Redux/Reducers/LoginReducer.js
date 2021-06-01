import { ActionTypes } from "./../constants/ActionTypes";

export const UserLoginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_LOGGEDIN:
      return { user: payload };
    default:
      return state;
  }
};

export const TokenReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.ACCESS_TOKEN:
          return { token: payload };
        default:
          return state;
      }
}

export const AuthorizationReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.AUTHORIZATION:
          return { isAuth: payload };
        default:
          return state;
      }
}