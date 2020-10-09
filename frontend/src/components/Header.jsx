import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

import { logout } from '../redux/user/user.actions';

const Header = () => 
{
    const dispatch = useDispatch();

    const userLoggedIn = useSelector(state => state.userLogin);
    const {userInfo} = userLoggedIn;

    const logoutHandler = () => 
    {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar bg="dark" variant = "dark" expand="lg" collapseOnSelect>
                <Container>
                    <IndexLinkContainer to = "/">
                        <Navbar.Brand>Denvato Stores</Navbar.Brand>
                    </IndexLinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to = "/cart">
                                <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title = {userInfo.name} id = "username">
                                    <LinkContainer to = "/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick = {logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to = "/sign-in">
                                    <Nav.Link><i className="fas fa-user"></i> Sign In </Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title = "Admin" id = "adminMenu">
                                    <LinkContainer to = "/admin/user-list">
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to = "/admin/product-list">
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to = "/admin/order-list">
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                            </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>  
            </Navbar>
        </header>
    )
};

export default Header;