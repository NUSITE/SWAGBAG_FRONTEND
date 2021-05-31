import { ActionTypes } from "../Constants/action-types"

export const setLoader = (isLoading) => {
    return {
        type: ActionTypes.SET_LOADER,
        payload: isLoading
    }
}