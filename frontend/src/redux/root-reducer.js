import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {productListReducer, productDetailsReducer} from './product/product.reducer';
import {cartReducer} from './cart/cart.reducer';
import {userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer} from './user/user.reducer';
import {shippingReducer} from './shipping/shipping.reducer';
import {createOrderReducer, orderDetailsReducer, orderPayReducer, userOrderListReducer} from './order/order.reducer';

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
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    shipping: shippingReducer,
    createOrder: createOrderReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userOrderList: userOrderListReducer
});

export default persistReducer(persistConfig, rootReducer);