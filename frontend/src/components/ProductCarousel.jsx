import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Carousel, Image} from 'react-bootstrap';

import Loader from './Loader';
import Message from './Message';
import {fetchTopProducts} from '../redux/product/product.actions';

const ProductCarousel = () => 
{
    const dispatch = useDispatch();

    const topRatedProducts = useSelector(state => state.topRatedProducts);
    const {loading, error, products} = topRatedProducts;

    useEffect(() => {
        dispatch(fetchTopProducts());
    },[dispatch]);

    return loading ? <Loader /> : error ? <Message variant = "danger">{error}</Message> : (
        <Carousel  pause = "hover" className = "bg-dark" >
            {products.map(product => (
                <Carousel.Item key = {product._id}>
                    <Link to = {`/product/${product._id}`}>
                        <Image src = {product.image} alt = {product.name} className ="img-responsive center-block d-block mx-auto my-5" fluid/>
                        <Carousel.Caption className = "carousel-caption">
                            <h2>{product.name} 
                                (&#8358;{product.price})
                            </h2>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ProductCarousel;