import {ADD_TO_CART, REMOVE_FROM_CART} from '../types';

const initialState = 
{
    cartItems: []
};

export const cartReducer = (state = initialState, action) => 
{
    const {type, payload} = action;

    switch (type) 
    {
        case ADD_TO_CART:
            const item = payload;

            const existingItem = state.cartItems.find(x => x.product === item.product);

            if(existingItem)
            {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existingItem.product ? item : x)
                };
            } else 
            {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            };
        default:
            return state;
    }
};