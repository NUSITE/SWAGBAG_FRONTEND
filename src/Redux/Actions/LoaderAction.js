import { ActionTypes } from "../../action-types"


export const setLoader = (isLoading) => {
    return {
        type: ActionTypes.LOADER,
        payload: isLoading
    }
}