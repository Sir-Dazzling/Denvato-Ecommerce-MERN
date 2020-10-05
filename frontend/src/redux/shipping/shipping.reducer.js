import {SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD} from '../types';

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
        case SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: payload
            };
        default:
            return state;
    }
};