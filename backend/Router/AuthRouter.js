import express from 'express';
const router = express.Router();
import {signup, login} from '../Controllers/AuthController.js';
import {signupValidation, loginValidation} from '../Middlewares/AuthValidation.js';

router.post('/login', (req, res) => {
    res.send('login success');
});

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

export default router;