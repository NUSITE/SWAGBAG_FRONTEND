import { ActionTypes } from "../../action-types";

export const SetProductsReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.CLEAR_STORE:
      return { products: null };
    default:
      return state;
  }
};
