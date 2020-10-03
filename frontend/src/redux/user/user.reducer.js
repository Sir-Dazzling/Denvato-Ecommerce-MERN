import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT} from '../types';

const initialState = 
{
    loading: false,
    userInfo: {},
    error: null
};

export const userLoginReducer = (state = initialState, action) =>
{
    const {type, payload} = action;

    switch (type) 
    {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: payload
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case USER_LOGOUT:
            return {}; 
        default:
           return state;
    }
};

export const userRegisterReducer = (state = initialState, action) =>
{
    const {type, payload} = action;

    switch (type) 
    {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: payload
            };
        case USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }; 
        default:
           return state;
    }
};