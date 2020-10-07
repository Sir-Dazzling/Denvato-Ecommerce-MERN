import express from 'express';

import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/OrderController.js';
import {protect} from '../middleware/AuthMiddleware.js';

const router = express.Router(); 

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;