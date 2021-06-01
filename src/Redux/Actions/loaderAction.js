import { ActionTypes } from "../constants/ActionTypes"


export const setLoader = (isLoading) => {
    return {
        type: ActionTypes.LOADER,
        payload: isLoading
    }
}