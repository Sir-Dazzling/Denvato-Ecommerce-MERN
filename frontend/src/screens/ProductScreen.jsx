import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';

import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';

import {fetchProductDetails} from '../redux/product/product.actions';

const ProductScreen = ({match}) => 
{
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);

    const {loading, error, product}  = productDetails;

    useEffect(() => {
        dispatch(fetchProductDetails(match.params.id));
    }, [dispatch]);

    return (
        <>
            <Link className = "btn btn-light my-3" to = "/">Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant = "danger">{error}</Message> : (
                <Row>
                    <Col md = {6}>
                        <Image src = {product.image} alt = {product.name} fluid />
                    </Col>
                    <Col md = {3}>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: &#8358;{product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </Col>
                    <Col md = {3}>
                        <Card>
                            <ListGroup.Item variant = "flush">
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>&#8358;{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item variant = "flush">
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In Stock": "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item variant = "flush">
                                <Button className = "btn btn-block" type = "button" disabled = {product.countInStock === 0}>Add to Cart</Button>
                            </ListGroup.Item>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
};

export default ProductScreen;