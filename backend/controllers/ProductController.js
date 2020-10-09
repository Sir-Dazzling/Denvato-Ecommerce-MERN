import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

// @description Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async(req, res) => 
{
    const keyword = req.query.keyword ? {
        name: 
        {
            $regex: req.query.keyword,
            $options: "i"
        }
    } : {};

    const products = await Product.find({...keyword});
    
    res.json(products);
});

// @description Fetch a single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async(req, res) => 
{
    const product = await Product.findById(req.params.id);

    if(product)
    {
        res.json(product);
    } else
    {
        res.status(404);
        throw new Error("Product not found");
    }
});

// @description Delete a single product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async(req, res) => 
{
    const product = await Product.findById(req.params.id);

    if(product)
    {
        await product.remove();
        res.json({message: "Product removed"})
    } else
    {
        res.status(404);
        throw new Error("Product not found");
    }
});

// @description Create a product
// @route POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async(req, res) => 
{
    const product = new Product({
        name: "Sample Name",
        price: 0,
        user: req.user.id,
        image: "/images/sample.jpg",
        brand: "Sample Brand",
        category: "Sample Category",
        countInStock: 0,
        numReviews: 0,
        description: "Sample Description"
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @description Update a product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async(req, res) => 
{
    const {name, price, image, brand, category, countInStock, description} = req.body;

    const product = await Product.findById(req.params.id);

    if(product)
    {
        product.name = name;
        product.price = price;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;
        product.description = description;

        const updatedProduct = await product.save();
        res.status(201).json(updatedProduct);
    } else 
    {
        res.status(404);
        throw new Error("Product not found");
    }
});

// @description create a new product review
// @route POST /api/products/:id/reviews
// @access Private
const createProductReview = asyncHandler(async(req, res) => 
{
    const {rating, comment} = req.body;

    const product = await Product.findById(req.params.id);

    if(product)
    {
        // Checking if user has already dropped a review
        const alreadyReviewed = product.reviews.find(review => review.user.toString() === req.user._id.toString());

        if(alreadyReviewed)
        {
            res.status(400);
            throw new Error("Product already reviewed");
        }

        const review = 
        {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        };

        product.reviews.push(review);

        product.numReviews = product.reviews.length;

        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

        await product.save();
        res.status(201).json({message: "Review added"});
    } else 
    {
        res.status(404);
        throw new Error("Product not found");
    }
});

export {getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview};