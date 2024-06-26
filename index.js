import express from 'express';
import cors from 'cors';
import connectDB from './connectDB.js';
import postRouter from './routes/posts.js';
import userRouter from './routes/user.js';

// const express = require("express")

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(8080, () => {
  console.log('server is listening on port 8080');
});
