import express from 'express';
import { addToCart, getCartItems, removeCartItem} from '../Controllers/CartController.js';

const router = express.Router();

router.post('/add', addToCart);
router.get("/:userId", getCartItems);
router.delete("/remove/:id", removeCartItem);

export default router;
