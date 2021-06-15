import { ActionTypes } from "../../action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const setSearchedProducts = (searchedProducts) => {
    return {
        type: ActionTypes.SEARCHED_PRODUCTS,
        payload: searchedProducts
    }
}