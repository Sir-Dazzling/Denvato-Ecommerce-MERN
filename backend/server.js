import path from 'path';
import express from "express";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import colors from 'colors';
import {notFound, errorHandler} from './middleware/ErrorMiddleware.js';

import ProductRoutes from './routes/ProductRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
import OrderRoutes from './routes/OrderRoutes.js';
import UploadRoutes from './routes/UploadRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/upload", UploadRoutes);

app.get("/api/config/paypal",  (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

// Making the upload folder static
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);

app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("API is running....");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));