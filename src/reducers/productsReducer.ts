import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILED,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILED,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILED,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILED,
    ProductAction
} from '../types';

import { IinitialState, Iproduct } from '../types'

const initialState: IinitialState = {
    products:[],
    error:false,
    loading:false,
    product:undefined
};

export default (state = initialState, action: ProductAction): IinitialState => {
    switch(action.type){
        // Add new product
        case GET_PRODUCTS:
        case GET_PRODUCT:
        case DELETE_PRODUCT:
        case EDIT_PRODUCT:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error:false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_FAILED:
        case GET_PRODUCT_FAILED:
        case DELETE_PRODUCT_FAILED:
        case EDIT_PRODUCT_FAILED:
        case GET_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                product:undefined,
                error: action.payload
            }

        // Get products
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading:false,
                error:false,
                products: action.payload
            }

        // Get single product
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                product: action.payload
            }

        // Delete product
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: state.products.filter((product: Iproduct) => product.id !== action.payload )
            }

        // Edit product
            case EDIT_PRODUCT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: false,
                    product: state.product
                }
        default:
            return state;
    }
};