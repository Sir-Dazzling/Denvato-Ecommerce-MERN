import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {productListReducer, productDetailsReducer} from './product/product.reducer';

const persistConfig = 
{
    key: 'root',
    storage,
    whitelist: ['']
};

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
});

export default persistReducer(persistConfig, rootReducer);