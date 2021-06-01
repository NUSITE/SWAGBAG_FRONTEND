import { combineReducers } from "redux";
import { LoaderReducer } from "./LoaderReducer";
import { AuthorizationReducer, TokenReducer, UserLoginReducer } from "./LoginReducer";

const reducers = combineReducers({
    loggedInUser: UserLoginReducer,
    accessToken: TokenReducer,
    authorization: AuthorizationReducer,
    loader: LoaderReducer
})

export default reducers;