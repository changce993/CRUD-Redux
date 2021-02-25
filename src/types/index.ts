import { type } from "os";

// Add products
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILED = 'ADD_PRODUCT_FAILED';

// Get products
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

// Get single product
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILED = 'GET_PRODUCT_FAILED';

// Delete product
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILED = 'DELETE_PRODUCT_FAILED';

// Edit product
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAILED = 'EDIT_PRODUCT_FAILED';


// Alert
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export interface Iproduct {
    name: string,
    price: string,
    id?:number
}

export interface IinitialState {
    products:Iproduct[],
    error:boolean,
    loading:boolean,
    product?:Iproduct
};

export interface IalertState {alert:{
    type:string,
    msg:string,
}}

export interface AddProductAction {
    type: typeof ADD_PRODUCT
};

export interface AddProductSuccessAction {
    type: typeof ADD_PRODUCT_SUCCESS,
    payload: Iproduct
};

export interface AddProductFailedAction {
    type: typeof ADD_PRODUCT_FAILED,
    payload: boolean
}; 

export interface GetProduct {
    type: typeof GET_PRODUCT
}

export interface GetProducts {
    type: typeof GET_PRODUCTS
}

export interface DeleteProduct {
    type: typeof DELETE_PRODUCT
}

export interface EditProduct {
    type: typeof EDIT_PRODUCT
}

export interface GetProductFailed {
    type: typeof GET_PRODUCT_FAILED,
    payload: boolean
}

export interface DeleteProductFailed {
    type: typeof DELETE_PRODUCT_FAILED,
    payload: boolean
}

export interface EditProductFailed {
    type: typeof EDIT_PRODUCT_FAILED,
    payload: boolean
}

export interface GetProductsFailed {
    type: typeof GET_PRODUCTS_FAILED,
    payload: boolean
}

export interface GetProductsSuccess {
    type: typeof GET_PRODUCTS_SUCCESS,
    payload: Iproduct[]
}

export interface GetProductSuccess {
    type: typeof GET_PRODUCT_SUCCESS,
    payload: Iproduct
}

export interface DeleteProductSuccess {
    type: typeof DELETE_PRODUCT_SUCCESS,
    payload: number
}

export interface EditProductSuccess {
    type: typeof EDIT_PRODUCT_SUCCESS
}

export type ProductAction =
    AddProductAction
    | AddProductSuccessAction
    | AddProductFailedAction
    | GetProduct
    | GetProducts
    | DeleteProduct
    | EditProduct
    | GetProductFailed
    | GetProductsFailed
    | DeleteProductFailed
    | EditProductFailed
    | GetProductsFailed
    | GetProductsSuccess
    | GetProductSuccess
    | DeleteProductSuccess
    | EditProductSuccess

export interface ShowAlertAction {
    type: typeof SHOW_ALERT,
    payload: IalertState
}

export interface HideAlertAction {
    type: typeof HIDE_ALERT,
    payload: IalertState
}

export type AlertAction =
    ShowAlertAction
    | HideAlertAction