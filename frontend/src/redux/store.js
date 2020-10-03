import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') 
{
    middlewares.push(logger);
}

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = 
{
    cart: 
    {
        cartItems: cartItemsFromStorage
    }
};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

//persistance version for the store 
export const persistor = persistStore(store);

export default { store, persistor };