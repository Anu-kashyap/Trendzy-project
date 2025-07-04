// Router/ProductRouter.js
import express from 'express';
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct
} from '../Controllers/ProductController.js';

// ✅ Import JWT middleware
import verifyToken from '../Middleware/verifyToken.js';

const router = express.Router();

// ✅ Public routes
router.get('/', getProducts);           
router.get('/:id', getSingleProduct);   

// ✅ Protected routes (require login via token)
router.post('/', verifyToken, addProduct);       
router.put('/:id', verifyToken, updateProduct);  
router.delete('/:id', verifyToken, deleteProduct); 

export default router;
