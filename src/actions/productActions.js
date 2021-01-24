import axiosClient from '../config/axios';
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
} from '../types';

// --- Add new product
export const newProductAction = (product) => {
    return async (dispatch) => {
        dispatch( addProduct() );
        try {
            window.location.pathname = '/';
            await axiosClient.post('/products', product);
            dispatch(addproduct_success(product));
        } catch (error) {
            console.log(error);
            dispatch(addproduct_failed(true));
        };
    };
};

const addProduct = () => ({
    type:ADD_PRODUCT
})

const addproduct_success = product => ({
    type:ADD_PRODUCT_SUCCESS,
    payload:product
});

const addproduct_failed = status => ({
    type:ADD_PRODUCT_FAILED,
    payload:status
});


// --- Get products
export const getProductsAction = () => {
    return async (dispatch) => {
        dispatch(getProducts());

        try {
            setTimeout(async () => {
                const response = await axiosClient.get('/products');
                dispatch(getProducts_success(response.data));
            }, 100);
        } catch (error) {
            console.log(error);
            dispatch(getProducts_failed());
        };
    };
};

const getProducts = () => ({
    type:GET_PRODUCTS
});

const getProducts_success = products => ({
    type:GET_PRODUCTS_SUCCESS,
    payload:products
});

const getProducts_failed = () => ({
    type:GET_PRODUCTS_FAILED,
    payload: true
}); 


// Get single product
export const getProductAction = product => {
    return async (dispatch) => {
        dispatch(getProduct());
        
        try {
            dispatch(getProduct_success(product));
        } catch (error) {
            console.log(error);
            dispatch(getProduct_failed());
        };
    };
};

const getProduct = () => ({
    type:GET_PRODUCT
});

const getProduct_success = product => ({
    type:GET_PRODUCT_SUCCESS,
    payload: product
});

const getProduct_failed = () => ({
    type:GET_PRODUCT_FAILED,
    payload: true
});


// Delete product
export const deleteProductAction = productId => {
    return async (dispatch) => {
        dispatch(deleteProduct());

        try {
            await axiosClient.delete(`/products/${productId}`)
            dispatch(deleteProduct_success(productId));
        } catch (error) {
            console.log(error);
            dispatch(deleteProduct_failed());
        };
    };
};

const deleteProduct = () => ({
    type:DELETE_PRODUCT
});

const deleteProduct_success = productId => ({
    type:DELETE_PRODUCT_SUCCESS,
    payload:productId
});

const deleteProduct_failed = () => ({
    type:DELETE_PRODUCT_FAILED,
    payload:true
});

// --- Edit product
export const editProductAction = product => {
    return async (dispatch) => {
        dispatch(editProduct());

        try {
            const response = await axiosClient.put(`/products/${product.id}`, product);
            editProduct_success(response.data);
        } catch (error) {
            console.log(error);
            editProduct_failed();
        };
    };
};

const editProduct = () => ({
    type:EDIT_PRODUCT
});

const editProduct_success = product => ({
    type:EDIT_PRODUCT_SUCCESS,
    payload: product
});

const editProduct_failed = () => ({
    type:EDIT_PRODUCT_FAILED,
    payload:true
});