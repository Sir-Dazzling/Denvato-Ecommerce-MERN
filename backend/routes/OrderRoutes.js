import express from 'express';

import { addOrderItems } from '../controllers/OrderController.js';
import {protect} from '../middleware/AuthMiddleware.js';

const router = express.Router(); 

router.route("/").post(protect, addOrderItems);

export default router;