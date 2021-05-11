import {combineReducers} from 'redux';
import {ProductReducer} from './Product-Reducer';

const reducers = combineReducers({
    allProducts: ProductReducer,
})

export default reducers;