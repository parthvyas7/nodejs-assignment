const jwt = require('jsonwebtoken');
const User = require('./models');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: 'Error signing up', error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = generateToken(user._id);
  res.json({ token });
};

const getProfile = async (req, res) => {
  res.json(req.user);
};

const randomJoke = async (req, res) => {
  const joke = await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json());
  res.json(joke);
};

const logout = (req, res) => {
  res.json({ message: 'Logout!' });
};

module.exports = { signup, login, getProfile, logout, randomJoke };
