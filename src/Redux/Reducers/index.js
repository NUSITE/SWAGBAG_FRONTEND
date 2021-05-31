import { combineReducers } from "redux";
import { LoaderReducer } from "./loaderReducer";
import { LoggedInUserReducer, TokenReducer, AuthorizationReducer, SessionTimeReducer } from "./userLoginReducer";

export const reducers = combineReducers({
  LoggedInUser: LoggedInUserReducer,
  jwtToken: TokenReducer,
  authorization: AuthorizationReducer,
  loader: LoaderReducer,
  session: SessionTimeReducer
});
