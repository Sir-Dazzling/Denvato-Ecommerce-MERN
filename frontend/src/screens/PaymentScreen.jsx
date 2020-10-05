import React, {useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

import {savePaymentMethod} from '../redux/shipping/shipping.actions';

const PaymentScreen = ({history}) => 
{ 
    const dispatch = useDispatch();

    const shippingAddressInfo = useSelector(state => state.shipping);
    const {shippingAddress} = shippingAddressInfo;

    if(!shippingAddress)
    {
        history.push("/shipping");
    }

    const [paymentMethod, setPaymentMethod] = useState("PayPal");

    const submitHandler = (e) => 
    {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history.push("/place-order");
    };

    return <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit = {submitHandler}>
            <Form.Group>
                <Form.Label as = "legend">Select Method</Form.Label>
                <Col>
                    <Form.Check type = "radio" label = "Paypal or Credit Card (* Default)" id = "PayPal" name = "paymentMethod" value = "PayPal" onChange = {(e) => setPaymentMethod(e.target.value)}></Form.Check>
                    <Form.Check type = "radio" label = "Stripe" id = "Stripe" name = "paymentMethod" value = "Stripe" onChange = {(e) => setPaymentMethod(e.target.value)}></Form.Check>
                    <Form.Check type = "radio" label = "Paystack" id = "Paystack" name = "paymentMethod" value = "Paystack" onChange = {(e) => setPaymentMethod(e.target.value)}></Form.Check>
                </Col>
            </Form.Group>
            <Button type = "submit" variant = "primary">Continue</Button>
        </Form>
    </FormContainer>
};

export default PaymentScreen;