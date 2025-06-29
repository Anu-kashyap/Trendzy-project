import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config(); 

const mongoURI = process.env.MONGO_URL;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection Error:", err));
