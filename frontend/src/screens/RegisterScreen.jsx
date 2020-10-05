import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import {register} from '../redux/user/user.actions';

const RegisterScreen = ({location, history}) => 
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const dispatch = useDispatch();

    const userRegistered = useSelector(state => state.userRegister);
    const {loading, error, userInfo} = userRegistered;

    const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if(userInfo)
        {
            history.push(redirect);
            console.log("redirected on register");
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => 
    {
        e.preventDefault();

        if(password !== confirmPassword)
        {
            setMessage("Passwords do not match");
        } else 
        {
            dispatch(register(name, email, password));
        }
    };

    return (
       <FormContainer>
           <h1>Sign Up</h1>
           {message && <Message variant = "danger">{message}</Message>}
           {error && <Message variant = "danger">{error}</Message>}
           {loading && <Loader />}
           <Form onSubmit = {submitHandler}>
                <Form.Group controlId = "name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type = "text" placeholder = "Enter your name" value = {name} onChange = {(e) => setName(e.target.value)} >
                        </Form.Control>
                </Form.Group> 
                <Form.Group controlId = "email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required type = "email" placeholder = "Enter Email" value = {email} onChange = {(e) => setEmail(e.target.value)} >
                    </Form.Control>
                </Form.Group>   
                <Form.Group controlId = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId = "confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required type = "password" placeholder = "Confirm Password" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} >
                    </Form.Control>
                </Form.Group>

                <Button type = "submit" variant = "primary" >Register</Button>
           </Form>

           <Row className = "py-3">
               <Col>
                    Have an Account?{" "} 
                    <Link to = {redirect ? `/sign-in?redirect=${redirect}` : '/sign-in'}>
                        Login
                    </Link>
               </Col>
           </Row>
       </FormContainer>
    )
};

export default RegisterScreen;