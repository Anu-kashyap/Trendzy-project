import process from 'process';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import AuthRouter from './Router/AuthRouter.js'

import './Models/db.js';  // 🔁 Add .js extension if using import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors())
app.use('/auth', AuthRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
