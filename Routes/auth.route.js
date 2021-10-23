const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/auth.controller');

router.post('/signup', AuthController.register);

module.exports = router;