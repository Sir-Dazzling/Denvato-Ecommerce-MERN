import express from 'express';

import {authUser, registerUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUserById, updateUser} from '../controllers/UserController.js';
import {protect, isAdmin} from '../middleware/AuthMiddleware.js';

const router = express.Router(); 

router.route("/").post(registerUser).get(protect, isAdmin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router.route("/:id").delete(protect, isAdmin, deleteUser).get(protect, isAdmin, getUserById).put(protect, isAdmin, updateUser);

export default router;