import {SAVE_SHIPPING_ADDRESS} from '../types';

export const shippingReducer = (state = {shippingAddress: {}}, action) => 
{
    const {type, payload} = action;

    switch (type) 
    {
        case SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: payload
            };
        default:
            return state;
    }
};