// Router/ProductRouter.js
import express from 'express';
import { addProduct, getProducts, updateProduct, deleteProduct, getSingleProduct } from '../Controllers/ProductController.js';

const router = express.Router();

router.post('/add', addProduct);
router.get('/', getProducts);
router.put('/update/:id', updateProduct);
router.patch("/products/:id", updateProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/:id', getSingleProduct);


export default router;
