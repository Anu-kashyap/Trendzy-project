import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRouter from './Router/AuthRouter.js';
import './Models/db.js';
import process from 'process';
import ProductRouter from './Router/ProductRouter.js';
import CartRouter from './Router/CartRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Handle JSON data
app.use(express.json());

// ✅ Enable CORS with options for frontend
app.use(cors({
  origin: ['https://trendzy-project-frontend.onrender.com'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],    
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ✅ Handle preflight OPTIONS requests
app.options('*', cors());

// ✅ Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/cart', CartRouter);

// ✅ Test route
app.get('/ping', (req, res) => {
  res.send('PONG');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
