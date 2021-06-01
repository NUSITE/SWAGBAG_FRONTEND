import { ActionTypes } from "./../constants/ActionTypes";

export const LoaderReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.LOADER:
            return {isLoading: payload}
        default:
            return state;
    }
}