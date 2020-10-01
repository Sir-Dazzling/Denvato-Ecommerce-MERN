import React from 'react';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import {Container, Navbar, Nav} from 'react-bootstrap';

const Header = () => 
{
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
                            <LinkContainer to = "/sign-in">
                                <Nav.Link><i className="fas fa-user"></i> Sign In </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>  
            </Navbar>
        </header>
    )
};

export default Header;