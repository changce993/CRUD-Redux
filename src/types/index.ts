// Add products
export const ADD_PRODUCT: string = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS: string = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILED: string = 'ADD_PRODUCT_FAILED';

// Get products
export const GET_PRODUCTS: string = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS: string = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED: string = 'GET_PRODUCTS_FAILED';

// Get single product
export const GET_PRODUCT: string = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS: string = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILED: string = 'GET_PRODUCT_FAILED';

// Delete product
export const DELETE_PRODUCT: string = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS: string = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILED: string = 'DELETE_PRODUCT_FAILED';

// Edit product
export const EDIT_PRODUCT: string = 'EDIT_PRODUCT';
export const EDIT_PRODUCT_SUCCESS: string = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAILED: string = 'EDIT_PRODUCT_FAILED';


// Alert
export const SHOW_ALERT: string = 'SHOW_ALERT';
export const HIDE_ALERT: string = 'HIDE_ALERT';

export interface Iproduct {
    name: string,
    price: string,
    id:number
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