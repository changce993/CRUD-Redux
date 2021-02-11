import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import alertReducer from './alertReducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    alerts: alertReducer
})

export type RootState = ReturnType<typeof rootReducer>