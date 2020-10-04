import {SAVE_SHIPPING_ADDRESS} from '../types';

// To save shipping address
export const saveShippingAddress = (data) => (dispatch) => 
{
    dispatch({
        type: SAVE_SHIPPING_ADDRESS,
        payload: data
    });

    console.log("Sihpping info is: "+data);

    localStorage.setItem("shippingAddress", JSON.stringify(data));
};