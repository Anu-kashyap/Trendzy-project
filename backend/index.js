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

app.use(express.json());
app.use(cors());

app.use('/cart', CartRouter);
app.use('/products', ProductRouter);
app.use('/auth', AuthRouter);

app.get('/ping', (req, res) => {
  res.send('PONG');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
