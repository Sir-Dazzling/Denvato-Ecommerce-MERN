import express from "express";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import colors from 'colors';
import {notFound, errorHandler} from './middleware/ErrorMiddleware.js';

import ProductRoutes from './routes/ProductRoutes.js';

dotenv.config();

connectDB();

const app = express();


app.use("/api/products", ProductRoutes);

app.use(notFound);

app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("API is running....");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));