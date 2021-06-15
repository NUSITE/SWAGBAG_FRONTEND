import { ActionTypes } from "../../action-types"


export const setLoader = (isLoading) => {
    return {
        type: ActionTypes.LOADER,
        payload: isLoading
    }
}

export const setOpenOrCloseSidebar = (showSidebar) => {
    return {
        type: ActionTypes.SHOW_SIDEBAR,
        payload: showSidebar
    }
}