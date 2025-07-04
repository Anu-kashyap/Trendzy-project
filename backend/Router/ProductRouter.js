// Router/ProductRouter.js
import express from 'express';
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct
} from '../Controllers/ProductController.js';

import verifyToken from '../Middlewares/verifyToken.js';

const router = express.Router();

router.get('/', getProducts);           
router.get('/:id', getSingleProduct);   

router.post('/', verifyToken, addProduct);       
router.put('/:id', verifyToken, updateProduct);  
router.delete('/:id', verifyToken, deleteProduct); 

export default router;
