import User from '../schemas/user.js';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '1d' });
};

const signupUser = async function (req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.signup(username, password);
    // console.log(user);
    // res.json(user);
    const token = createToken(user._id);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async function (req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    // console.log(user);
    // res.json(user);
    const token = createToken(user._id);
    // console.log(token);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signupUser };
