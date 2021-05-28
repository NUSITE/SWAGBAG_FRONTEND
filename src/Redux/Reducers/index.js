import { combineReducers } from "redux";
import { LoggedInUserReducer, TokenReducer, AuthorizationReducer } from "./userLoginReducer";

export const reducers = combineReducers({
  LoggedInUser: LoggedInUserReducer,
  jwtToken: TokenReducer,
  authorization: AuthorizationReducer
});
