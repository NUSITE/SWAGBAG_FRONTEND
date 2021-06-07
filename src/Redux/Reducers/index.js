import { combineReducers } from "redux";
import { ActionTypes } from "../../action-types";
import { LoaderReducer } from "./LoaderReducer";
import { AuthorizationReducer, TokenReducer, UserLoginReducer } from "./LoginReducer";
import { SetProductsReducers } from './ProductsReducers'


const reducers = combineReducers({
    loggedInUser: UserLoginReducer,
    accessToken: TokenReducer,
    authorization: AuthorizationReducer,
    loader: LoaderReducer,
    fetchedProducts: SetProductsReducers
})


export default reducers;