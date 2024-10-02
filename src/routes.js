const express = require('express');
const { signup, login, getProfile, logout, randomJoke } = require('./controller');
const { protect } = require('./middleware');

const router = express.Router();

router.post('/users/signup', signup);
router.post('/users/login', login);

router.get('/random-joke', protect, randomJoke);

router.get('/users/me', protect, getProfile);
router.post('/users/logout', protect, logout);

module.exports = router;
