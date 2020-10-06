import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_RESET} from '../types';

export const createOrderReducer = (state = {}, action) => 
{
    const {type, payload} = action;

    switch (type) 
    {
        case CREATE_ORDER_REQUEST:
            return {
                loading: true
            };
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                success: true,
                order: payload
            };
        case CREATE_ORDER_FAIL:
            return {
                loading: false,
                error: payload
            };
        default:
            return state;
    }
};

export const orderDetailsReducer = (state = {loading: true, orderItems: [], shippingAddress: {}}, action) => 
{
    const {type, payload} = action;

    switch (type) 
    {
        case  ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case  ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: payload
            };
        case  ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            };
        default:
            return state;
    }
};

export const orderPayReducer = (state = {}, action) => 
{
    const {type, payload} = action;

    switch (type) 
    {
        case  ORDER_PAY_REQUEST:
            return {
                loading: true
            };
        case  ORDER_PAY_SUCCESS:
            return {
                loading: false,
                success: true
            };
        case  ORDER_PAY_FAIL:
            return {
                loading: false,
                error: payload
            };
        case ORDER_PAY_RESET:
            return {};
        default:
            return state;
    }
};