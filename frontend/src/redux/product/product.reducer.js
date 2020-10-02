import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILURE} from '../types';

const initialState = 
{
    loading: false,
    products: [],
    product: 
    {
        reviews: []
    },
    error: null
};

export const productListReducer = (state = initialState, action) =>
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

export const productDetailsReducer = (state = initialState, action) =>
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