import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILURE, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAILURE, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAILURE, PRODUCT_CREATE_RESET, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAILURE, PRODUCT_UPDATE_RESET} from '../types';

export const productListReducer = (state = {products: []}, action) =>
{
    const {type, payload} = action;

    switch (type) 
    {
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload
            };
        case PRODUCT_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
    
        default:
           return state;
    }
};

export const productDetailsReducer = (state = {product: {reviews: []}}, action) =>
{
    const {type, payload} = action;

    switch (type) 
    {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: payload
            };
        case PRODUCT_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
    
        default:
           return state;
    }
};

export const productDeleteReducer = (state = {}, action) =>
{
    const {type, payload} = action;

    switch (type) 
    {
        case PRODUCT_DELETE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PRODUCT_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            };
        case PRODUCT_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
    
        default:
           return state;
    }
};

export const productCreateReducer = (state = {}, action) =>
{
    const {type, payload} = action;

    switch (type) 
    {
        case PRODUCT_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PRODUCT_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                product: payload
            };
        case PRODUCT_CREATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case PRODUCT_CREATE_RESET:
            return {};
        default:
           return state;
    }
};

export const productUpdateReducer = (state = {product: {}}, action) =>
{
    const {type, payload} = action;

    switch (type) 
    {
        case PRODUCT_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PRODUCT_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                product: payload
            };
        case PRODUCT_UPDATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case PRODUCT_UPDATE_RESET:
            return {product: {}};
        default:
           return state;
    }
};