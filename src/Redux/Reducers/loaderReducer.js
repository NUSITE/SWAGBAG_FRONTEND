import { ActionTypes } from "../Constants/action-types";

export const LoaderReducer = (
  state = { isLoading: false },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_LOADER:
      return { isLoading: payload };
    default:
      return state;
  }
};
