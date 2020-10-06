import React from 'react';
import {Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShippingScreen from '../screens/ShippingScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';
import OrderScreen from '../screens/OrderScreen';


const Routes = () => {
    return (
        <Container>
            <Route path = "/sign-in" component = {LoginScreen} />
            <Route path = "/register" component = {RegisterScreen} />
            <Route exact path = "/" component = {HomeScreen} />
            <Route path = "/product/:id" component = {ProductScreen} />
            <Route path = "/cart/:id?" component = {CartScreen} />
            <Route path = "/profile" component = {ProfileScreen} />
            <Route path = "/shipping" component = {ShippingScreen} />
            <Route path = "/payment" component = {PaymentScreen} />
            <Route path = "/place-order" component = {PlaceOrderScreen} />
            <Route path = "/orders/:id" component = {OrderScreen} />
        </Container>
    )
};

export default Routes;