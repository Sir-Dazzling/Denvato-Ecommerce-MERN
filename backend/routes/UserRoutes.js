import express from 'express';

import {authUser, registerUser, getUserProfile} from '../controllers/UserController.js';
import {protect} from '../middleware/AuthMiddleware.js';

const router = express.Router(); 

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;