import { ActionTypes } from "../../action-types";

export const LoaderReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.LOADER:
            return {isLoading: payload}
        default:
            return state;
    }
}

export const ShowSidebarReducer = (state={showSidebar: false}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SHOW_SIDEBAR:
            return {showSidebar: payload}
        default:
            return state;
    }
}