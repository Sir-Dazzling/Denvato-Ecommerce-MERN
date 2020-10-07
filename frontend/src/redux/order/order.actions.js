import axios from 'axios';
import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL, USER_ORDER_LIST_REQUEST, USER_ORDER_LIST_SUCCESS, USER_ORDER_LIST_FAIL} from '../types';

// To create an order
export const createOrder = (order) => async (dispatch, getState) => 
{
    try 
    {
        dispatch({type: CREATE_ORDER_REQUEST});    

        const {userLogin: {userInfo}} = getState();

        const config = 
        {
            headers: 
            {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        };
        
        const {data} = await axios.post("/api/orders", order, config);
       

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data 
        });

    } catch (error) 
    {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });    
    }
};

// Get order id
export const getOrderById = (id) => async (dispatch, getState) => 
{
    try 
    {  
        dispatch({type: ORDER_DETAILS_REQUEST});    

        const {userLogin: {userInfo}} = getState();

        const config = 
        {
            headers: 
            {
                Authorization: `Bearer ${userInfo.token}`
            }
        };
        
        const {data} = await axios.get(`/api/orders/${id}`, config);

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data 
        });

        
    } catch (error) 
    {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });    
    }
};

// Paying for order
export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => 
{
    try 
    {
        dispatch({type: ORDER_PAY_REQUEST});    

        const {userLogin: {userInfo}} = getState();

        const config = 
        {
            headers: 
            {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        };
        
        const {data} = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config);
       

        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data 
        });

    } catch (error) 
    {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });    
    }
};

// List user's orders
export const listUserOrders = () => async (dispatch, getState) => 
{
    try 
    {
        dispatch({type: USER_ORDER_LIST_REQUEST});    

        const {userLogin: {userInfo}} = getState();

        const config = 
        {
            headers: 
            {
                Authorization: `Bearer ${userInfo.token}`
            }
        };
        
        const {data} = await axios.get("/api/orders/myorders", config);
       

        dispatch({
            type: USER_ORDER_LIST_SUCCESS,
            payload: data 
        });

    } catch (error) 
    {
        dispatch({
            type: USER_ORDER_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });    
    }
};