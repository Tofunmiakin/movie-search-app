const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/auth.controller');
const passport = require('passport');

router.post('/signup', AuthController.register);

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login?error=true'
}));

module.exports = router;