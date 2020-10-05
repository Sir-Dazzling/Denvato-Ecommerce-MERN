import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderScreen = () => {

    const cart = useSelector(state => state.cart);
    const {cartItems}  = cart;

    const shippingAddressInfo = useSelector(state => state.shipping);
    const {shippingAddress, paymentMethod} = shippingAddressInfo;

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md = {8}>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <h1>Shipping</h1>
                            <p>
                                <strong>Address</strong>
                                {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: {paymentMethod}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cartItems.length === 0 ? <Message> Your cart is empty</Message> : <ListGroup variant = "flush">
                                    {cartItems.map((item, index) => (
                                        <ListGroup.Item key = {index}>
                                            <Row>
                                                <Col md = {1}>
                                                    <Image src = {item.image} alt = {item.name} fluid rounded />
                                                </Col>
                                                <Col>
                                                    <Link to = {`/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </Col>
                                                <Col md = {4}>
                                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
};

export default PlaceOrderScreen;