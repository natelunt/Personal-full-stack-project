import axios from 'axios';

const initialState = {
    loading: false,
    productList: []
};

const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';

export function getProducts() {
    const products = axios.get('/api/products');

    return {
        type: GET_PRODUCTS,
        payload: products
    };
};

export function getProductsByCategory(category) {
    const productsByCategory = axios.get(`/api/products/categories?category=${category}`);

    return {
        type: GET_PRODUCTS_BY_CATEGORY,
        payload: productsByCategory
    };
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCTS + '_PENDING':
            return { ...state, loading: true };
        case GET_PRODUCTS + '_FULFILLED':
            return { ...state, productList: payload.data, loading: false };
        case GET_PRODUCTS + '_REJECTED':
            return { ...state, loading: false };
        case GET_PRODUCTS_BY_CATEGORY + '_PENDING':
            return { ...state, loading: true };
        case GET_PRODUCTS_BY_CATEGORY + '_FULFILLED':
            return { ...state, productList: payload.data, loading: false };
        case GET_PRODUCTS_BY_CATEGORY + '_REJECTED':
            return { ...state, loading: false };
        default:
            return state;
    }
};

