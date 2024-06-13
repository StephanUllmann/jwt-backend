import jwt from 'jsonwebtoken';
import User from './schemas/user.js';

const requireAuth = async function (req, res, next) {
  const { authorization } = req.headers;

  // console.log(authorization);

  if (!authorization) {
    return res.status(401).json({ error: 'Not Authorized' });
  }

  const token = authorization.split(' ')[1];
  // console.log(token);
  try {
    const payload = jwt.verify(token, process.env.SECRET);
    // console.log(payload);

    res.user = await User.findById(payload.id);

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Not Authorized' });
  }
};

export default requireAuth;
