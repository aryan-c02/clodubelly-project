import express from "express";
import User from "../models/User.js";
import { registerUser, generateOtp, validateOTP } from "../controllers/userControllers.js";



const router = express.Router();


router.post('/register', registerUser);
router.post('/generateOtp', generateOtp);
router.post('/validateOtp', validateOTP);


export default router;