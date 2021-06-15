import { combineReducers } from "redux";
import { LoaderReducer, ShowSidebarReducer } from "./LoaderReducer";
import { AuthorizationReducer, TokenReducer, UserLoginReducer } from "./LoginReducer";
import { SetProductsReducers, SearchedProductsReducers } from './ProductsReducers'


const reducers = combineReducers({
    loggedInUser: UserLoginReducer,
    accessToken: TokenReducer,
    authorization: AuthorizationReducer,
    loader: LoaderReducer,
    fetchedProducts: SetProductsReducers,
    sidebar: ShowSidebarReducer,
    searchedProducts: SearchedProductsReducers
})


export default reducers;