const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { BAD_REQUEST, NOT_FOUND, DEFAULT_ERROR } = require('../utils/errors');
const { JWT_SECRET } = require('../utils/config');

const CONFLICT = 409;
const UNAUTHORIZED = 401;

const createUser = (req, res) => {
  const { name, avatar, email, password } = req.body;

  if (!email || !password) {
    return res.status(BAD_REQUEST).send({ message: 'Email and password are required' });
  }

  const normalizedEmail = String(email).toLowerCase();

  return bcrypt
    .hash(password, 10)
    .then((hash) => User.create({ name, avatar, email: normalizedEmail, password: hash }))
    .then((user) => {
      const userObj = user.toObject();
      delete userObj.password;
      return res.status(201).send(userObj);
    })
    .catch((err) => {
      if (err.code === 11000) {
        return res.status(CONFLICT).send({ message: 'Email already registered' });
      }
      if (err.name === 'ValidationError') {
        return res.status(BAD_REQUEST).send({ message: 'Invalid user data' });
      }
      console.error(err);
      return res.status(DEFAULT_ERROR).send({ message: 'An error has occurred on the server' });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(BAD_REQUEST).send({ message: 'Email and password are required' });
  }

  const normalizedEmail = String(email).toLowerCase();

  return User.findOne({ email: normalizedEmail })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('AUTH'));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error('AUTH'));
        }
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
        return res.send({ token });
      });
    })
    .catch((err) => {
      if (err.message === 'AUTH') {
        return res.status(UNAUTHORIZED).send({ message: 'Incorrect email or password' });
      }
      console.error(err);
      return res.status(DEFAULT_ERROR).send({ message: 'An error has occurred on the server' });
    });
};

const getCurrentUser = (req, res) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.status(NOT_FOUND).send({ message: 'User not found' });
      }
      return res.send(user);
    })
    .catch((err) => {
      console.error(err);
      if (err.name === 'CastError') {
        return res.status(BAD_REQUEST).send({ message: 'Invalid user ID' });
      }
      return res.status(DEFAULT_ERROR).send({ message: 'An error has occurred on the server' });
    });
};

const updateProfile = (req, res) => {
  const { name, avatar } = req.body;

  return User.findByIdAndUpdate(
    req.user._id,
    { name, avatar },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(NOT_FOUND).send({ message: 'User not found' });
      }
      return res.send(user);
    })
    .catch((err) => {
     
      console.error(err);
      if (err.name === 'ValidationError') {
        return res.status(BAD_REQUEST).send({ message: 'Invalid user data' });
      }
      return res.status(DEFAULT_ERROR).send({ message: 'An error has occurred on the server' });
    });
};

module.exports = {
  createUser,
  login,
  getCurrentUser,
  updateProfile,
};