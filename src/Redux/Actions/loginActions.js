import { ActionTypes } from "../constants/ActionTypes"



export const setuserLoggedIn = (user) => {
    return {
        type: ActionTypes.USER_LOGGEDIN,
        payload: user
    }
}

export const setAccessToken = (token) => {
    return {
        type: ActionTypes.ACCESS_TOKEN,
        payload: token
    }
}

export const setAuthorization = (authorization) => {
    return {
        type: ActionTypes.AUTHORIZATION,
        payload: authorization
    }
}