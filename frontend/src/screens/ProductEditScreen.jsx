import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import {fetchProductDetails, updateProduct} from '../redux/product/product.actions';
import { PRODUCT_UPDATE_RESET } from '../redux/types';

const ProductEditScreen = ({match, history}) => 
{
    const productId = match.params.id

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState("");
    const [uploading, setUploading] = useState(false);
    const [uploadingError, setUploadingError] = useState();
    
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;

    const productUpdate = useSelector(state => state.productUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success} = productUpdate;

    useEffect(() => {
        if(success)
        {
            dispatch({type: PRODUCT_UPDATE_RESET});
            history.push("/admin/product-list");
        } else 
        {
            if(!product.name || product._id !== productId)
            {
                dispatch(fetchProductDetails(productId));
            } else 
            {
                setName(product.name);
                setPrice(product.price);
                setImage(product.image);
                setBrand(product.brand);
                setCategory(product.category);
                setCountInStock(product.countInStock);
                setDescription(product.description);
            }
        }
    }, [dispatch, history, productId, product, success]);

    // Handling uplaoding image request to backend server
    const imageUploadHandler = async(e) => 
    {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        setUploading(true);

        try 
        {
            const config = 
            {
                headers: 
                {
                    "Content-Type": "multipart/form-data"
                }
            }    

            const {data} = await axios.post("/api/upload", formData, config);

            setImage(data);
            setUploading(false);
        } catch (error) 
        {
            console.error("Image error is "+error);
            setUploading(false);
            setUploadingError("Oops Something went wrong with your upload, try again and make sure its either a jpg, jpeg or png file");
        }
    };

    const submitHandler = (e) => 
    {
        e.preventDefault();
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            brand,
            image,
            category,
            description,
            countInStock
        }));
    };

    return (
        <>
            <Link to = "/admin/product-list" className = "btn btn-light my-3">Go Back</Link>
            <FormContainer>
                <h1>Edit Product</h1>
                {loadingUpdate && <Loader />} {errorUpdate && <Message varaint = "danger">{errorUpdate}</Message>} {success && <Message variant = "success">Product updated successfully</Message>}
                {loading ? <Loader /> : error ? <Message variant = "danger">{error}</Message> : (
                    <Form onSubmit = {submitHandler}>
                        <Form.Group controlId = "name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type = "text" placeholder = "Enter your name" value = {name} onChange = {(e) => setName(e.target.value)} >
                                </Form.Control>
                        </Form.Group> 
                        <Form.Group controlId = "price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required type = "number" placeholder = "Enter price" value = {price} onChange = {(e) => setPrice(e.target.value)} >
                            </Form.Control>
                        </Form.Group>   
                        <Form.Group controlId = "image">
                            <Form.Label>Image</Form.Label>
                            <Form.Control className = "mb-3" required type = "text" placeholder = "Enter image url" value = {image} onChange = {(e) => setImage(e.target.value)} >
                            </Form.Control>
                            {uploadingError && <Message variant = "danger">{uploadingError}</Message>}
                            <Form.File id = "image-file" label = "Choose product image" custom onChange = {imageUploadHandler} />
                            {uploading && <Loader />}
                        </Form.Group>
                        <Form.Group controlId = "brand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control required type = "text" placeholder = "Enter brand" value = {brand} onChange = {(e) => setBrand(e.target.value)} >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId = "countInStock">
                            <Form.Label>Count in Stock</Form.Label>
                            <Form.Control required type = "number" placeholder = "Enter count in stock" value = {countInStock} onChange = {(e) => setCountInStock(e.target.value)} >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId = "category">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control required type = "text" placeholder = "Enter category" value = {category} onChange = {(e) => setCategory(e.target.value)} >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId = "description">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control required type = "text" placeholder = "Enter product description" value = {description} onChange = {(e) => setDescription(e.target.value)} >
                            </Form.Control>
                        </Form.Group>
                        <Button type = "submit" variant = "primary">Update</Button>
                    </Form>
                )}
            </FormContainer>
        </>
    )
};

export default ProductEditScreen;