import { ActionTypes } from "../Constants/action-types"

export const setLoggedInUser = (user) => {
    return {
        type: ActionTypes.SET_LOGGEDIN_USER,
        payload: user
    }
}

export const setBearerToken = (token) => {
    return {
        type: ActionTypes.SET_TOKEN,
        payload: token
    }
}

export const setAuthorization = (authorization) => {
    return {
        type: ActionTypes.IS_AUTHORISZED,
        payload: authorization
    }
}

export const setSessionTimeout = (sessionTime) => {
    return {
        type: ActionTypes.SESSION_TIMEOUT,
        payload: sessionTime
    }
}