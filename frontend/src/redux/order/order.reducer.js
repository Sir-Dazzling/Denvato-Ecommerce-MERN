import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_RESET, CREATE_ORDER_RESET, ORDER_DETAILS_RESET, USER_ORDER_LIST_REQUEST, USER_ORDER_LIST_SUCCESS, USER_ORDER_LIST_FAIL, USER_ORDER_LIST_RESET, ALL_USERS_ORDER_LIST_REQUEST, ALL_USERS_ORDER_LIST_SUCCESS, ALL_USERS_ORDER_LIST_FAIL, ALL_USERS_ORDER_LIST_RESET, ORDER_DELIVER_REQUEST, ORDER_DELIVER_SUCCESS, ORDER_DELIVER_FAIL, ORDER_DELIVER_RESET } from '../types';

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
        case CREATE_ORDER_RESET:
            return {};
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
        case ORDER_DETAILS_RESET:
            return {};
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

export const orderDeliverReducer = (state = {}, action) => 
{
    const {type, payload} = action;

    switch (type) 
    {
        case  ORDER_DELIVER_REQUEST:
            return {
                loading: true
            };
        case  ORDER_DELIVER_SUCCESS:
            return {
                loading: false,
                success: true
            };
        case  ORDER_DELIVER_FAIL:
            return {
                loading: false,
                error: payload
            };
        case ORDER_DELIVER_RESET:
            return {};
        default:
            return state;
    }
};

export const userOrderListReducer = (state = {orders: []}, action) => 
{
    const {type, payload} = action;

    switch (type) 
    {
        case  USER_ORDER_LIST_REQUEST:
            return {
                loading: true
            };
        case  USER_ORDER_LIST_SUCCESS:
            return {
                loading: false,
                orders: payload
            };
        case  USER_ORDER_LIST_FAIL:
            return {
                loading: false,
                error: payload
            };
        case USER_ORDER_LIST_RESET:
            return {orders: []}
        default:
            return state;
    }
};

export const allUsersOrderListReducer = (state = {orders: []}, action) => 
{
    const {type, payload} = action;

    switch (type) 
    {
        case  ALL_USERS_ORDER_LIST_REQUEST:
            return {
                loading: true
            };
        case  ALL_USERS_ORDER_LIST_SUCCESS:
            return {
                loading: false,
                orders: payload
            };
        case  ALL_USERS_ORDER_LIST_FAIL:
            return {
                loading: false,
                error: payload
            };
        case ALL_USERS_ORDER_LIST_RESET:
            return {orders: []}
        default:
            return state;
    }
};