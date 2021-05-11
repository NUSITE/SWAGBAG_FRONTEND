import {ActionTypes} from './../Constants/Action-Types';

export const ProductReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            
            return {...state, products: payload};
    
        default:
            return state;
    }
}