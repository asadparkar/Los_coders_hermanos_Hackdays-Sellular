const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/UserControllers')

router.post('/signup', UserControllers.Signup);

module.exports = router