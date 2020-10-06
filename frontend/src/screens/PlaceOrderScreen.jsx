import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';

import {createOrder} from '../redux/order/order.actions';

const PlaceOrderScreen = ({history}) => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems}  = cart;

    const shippingAddressInfo = useSelector(state => state.shipping);
    const {shippingAddress, paymentMethod} = shippingAddressInfo;

    // Add decimals
    const addDecimals = (num) => 
    {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    // Calculate prices
    const itemsPrice = addDecimals(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

    // Shipping price
    const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);

    // Tax Price
    const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));

    const totalPrice = (Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)).toFixed(2);

    const orderCreated = useSelector(state => state.order);
    const {order, success, error}  = orderCreated;

    useEffect(() => {
        if(success)
        {
            history.push(`/orders/${order._id}`);
        }
        // eslint-disable-next-line
    },[history, success]);

    const placeOrderHandler = (e) => 
    {
        e.preventDefault();
        dispatch(createOrder({
            orderItems: cartItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice
        }));
    };

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md = {8}>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
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
                                                    {item.qty} x &#8358;{item.price} = &#8358;{item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md = {4}>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <h2>Order Summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Items</Col>
                                <Col>&#8358;{itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Shipping</Col>
                                <Col>&#8358;{shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Tax</Col>
                                <Col>&#8358;{taxPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Total</Col>
                                <Col>&#8358;{totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {error && <Message variant = "danger">{error}</Message>}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type = "button" className = "btn-block" disabled = {cartItems.length === 0} onClick = {placeOrderHandler}>Place Order</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
};

export default PlaceOrderScreen;