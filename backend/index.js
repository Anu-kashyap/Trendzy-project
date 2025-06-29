import process from 'process';
import express from 'express';
import dotenv from 'dotenv';

import './Models/db.js';  // 🔁 Add .js extension if using import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  res.send('PONG');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
