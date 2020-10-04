import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {productListReducer, productDetailsReducer} from './product/product.reducer';
import {cartReducer} from './cart/cart.reducer';
import {userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from './user/user.reducer';
import {shippingReducer} from './shipping/shipping.reducer';

const persistConfig = 
{
    key: 'root',
    storage,
    whitelist: ['']
};

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    shipping: shippingReducer
});

export default persistReducer(persistConfig, rootReducer);