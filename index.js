import express from 'express';
import connectDB from './connectDB.js';

import userRouter from './routes/user.js';

const app = express();
app.use(express.json());
connectDB();

app.use('/users', userRouter);

app.listen(8080, () => {
  console.log('server is listening on port 8080');
});
