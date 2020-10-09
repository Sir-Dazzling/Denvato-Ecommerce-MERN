import express from 'express';

import { addOrderItems, getOrderById, updateOrderToPaid, updateOrderToDelivered, getMyOrders, getAllOrders } from '../controllers/OrderController.js';
import {isAdmin, protect} from '../middleware/AuthMiddleware.js';

const router = express.Router(); 

router.route("/").post(protect, addOrderItems).get(protect, isAdmin, getAllOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, isAdmin, updateOrderToDelivered);

export default router;