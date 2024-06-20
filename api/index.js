import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';


dotenv.config();

const app = express();
app.use(express.json())
app.use(cookieParser());
// app.use(cors({
//     origin: ' http://localhost:5173/*', // Replace with your client URL
//     credentials: true // Allow credentials (cookies)
//   }));

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log('server is runing on port 3000.!!');
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);





app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });