import {SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD} from '../types';

// To save shipping address
export const saveShippingAddress = (data) => (dispatch) => 
{
    dispatch({
        type: SAVE_SHIPPING_ADDRESS,
        payload: data
    });

    localStorage.setItem("shippingAddress", JSON.stringify(data));
};

// To save payment method
export const savePaymentMethod = (data) => (dispatch) => 
{
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload: data
    });

    localStorage.setItem("paymentMethod", JSON.stringify(data));
};