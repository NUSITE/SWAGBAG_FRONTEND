import { ActionTypes } from "../Constants/action-types";

export const LoggedInUserReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_LOGGEDIN_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}

export const TokenReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_TOKEN:
            return {token: payload}
        default:
            return state;
    }
}