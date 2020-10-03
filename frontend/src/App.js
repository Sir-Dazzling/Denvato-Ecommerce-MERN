import React from 'react';
import {Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

import './index.css';

function App() 
{
  return (
    <>
      <Header />
        <main className = "py-3">
          <Container>
            <Route path = "/sign-in" component = {LoginScreen} />
            <Route path = "/register" component = {RegisterScreen} />
            <Route exact path = "/" component = {HomeScreen} />
            <Route path = "/product/:id" component = {ProductScreen} />
            <Route path = "/cart/:id?" component = {CartScreen} />
            <Route path = "/profile" component = {ProfileScreen} />
          </Container>
        </main>
      <Footer />
    </>
  );
}

export default App;