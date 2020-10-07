import React, {useState, useEffect} from 'react';
import {Form, Button, Row, Col, Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

import Message from '../components/Message';
import Loader from '../components/Loader';
import {LinkContainer} from 'react-router-bootstrap';

import {getUserDetails, updateUserProfile} from '../redux/user/user.actions';
import {listUserOrders} from '../redux/order/order.actions';

const ProfileScreen = ({history}) => 
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;

    const userLoggedIn = useSelector(state => state.userLogin);
    const {userInfo} = userLoggedIn;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const {success} = userUpdateProfile;

    const userOrders = useSelector(state => state.userOrderList);
    const {loading: loadingOrders, error: errorOrders, orders} = userOrders;

    useEffect(() => {
        if(!userInfo)
        {
            history.push("/sign-in");
        } else 
        {
            if(!user.name)
            {
                dispatch(getUserDetails("profile"));
            } else 
            {
                setName(user.name);
                setEmail(user.email);
            }
            dispatch(listUserOrders());
        }
    }, [dispatch, history, userInfo, user]);

    const submitHandler = (e) => 
    {
        e.preventDefault();

        if(password !== confirmPassword)
        {
            setMessage("Passwords do not match");
        } else 
        {
            dispatch(updateUserProfile({id: user._id, name, email, password}));
        }
    };

    return <Row>
        <Col md = {3}>
            <h2>User Profile</h2>
           {message && <Message variant = "danger">{message}</Message>}
           {error && <Message variant = "danger">{error}</Message>}
           {success && <Message variant = "success">Profile Updated</Message>}
           {loading && <Loader />}
           <Form onSubmit = {submitHandler}>
                <Form.Group controlId = "name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type = "text" placeholder = "Enter your name" value = {name} onChange = {(e) => setName(e.target.value)} >
                        </Form.Control>
                </Form.Group> 
                <Form.Group controlId = "email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type = "email" placeholder = "Enter Email" value = {email} onChange = {(e) => setEmail(e.target.value)} >
                    </Form.Control>
                </Form.Group>   
                <Form.Group controlId = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = "password" placeholder = "Enter Password" value = {password} onChange = {(e) => setPassword(e.target.value)} >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId = "confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type = "password" placeholder = "Confirm Password" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} >
                    </Form.Control>
                </Form.Group>

                <Button type = "submit" variant = "primary" >Update</Button>
           </Form>
        </Col>
        <Col md = {9}>
            <h2>My Orders</h2>
            {loadingOrders ? <Loader /> : errorOrders ? <Message variant = "danger">{errorOrders}</Message> : (
                <Table striped bordered hover responsive className = "table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key = {order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt.substring(0,10)}</td>
                                <td>&#8358;{order.totalPrice}</td>
                                <td>{order.isPaid ? order.paidAt : (
                                    <i className="fas fa-times" style = {{color: "red"}}></i>
                                )}</td>
                                 <td>{order.isDelivered ? order.deliveredAt : (
                                    <i className="fas fa-times" style = {{color: "red"}}></i>
                                )}</td>
                                <td>
                                    <LinkContainer to = {`/orders/${order._id}`}>
                                        <Button className = "btn-sm" variant = "dark">Details</Button>
                                    </LinkContainer>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Col>
    </Row>
};

export default ProfileScreen;