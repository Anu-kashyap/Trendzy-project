import express from 'express';
import { signup, login } from '../Controllers/AuthController.js';
import { signupValidation, loginValidation } from '../Middlewares/AuthValidation.js';
import verifyToken from '../Middlewares/verifyToken.js';

const router = express.Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

router.get('/verify', verifyToken, (req, res) => {
    res.status(200).json({ success: true, message: "Token is valid", user: req.user });
});

export default router;
