import { combineReducers } from "redux";
import { LoggedInUserReducer, TokenReducer } from "./userLoginReducer";

export const reducers = combineReducers({
  LoggedInUser: LoggedInUserReducer,
  jwtToken: TokenReducer
});
