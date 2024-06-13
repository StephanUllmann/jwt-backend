import express from 'express';
import { loginUser, signupUser } from '../controllers/user.js';
import requireAuth from '../requireAuth.js';
const userRouter = express.Router();

// userRouter.get("/:id")
userRouter.post('/signup', signupUser);
userRouter.post('/login', loginUser);
userRouter.get('/admin', requireAuth, (req, res) => res.send('Hello on the protected route!'));

export default userRouter;
