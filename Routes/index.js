// const express = require('express');
// const passport = require('passport');
// const router = express.Router();
// const {
//   getUsers,
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser
// } = require('../Controllers/index');

// router.route('/').get(getUsers);
// router.route('/').post(createUser);
// router.route('/:id').get(getUser);
// router.route('/:id').put(updateUser);
// router.route('/:id').delete(deleteUser);
// router.route('/signup').post(passport.authenticate('local-signup', {
//   successRedirect: '/',
//   failureRedirect: '/signin'
// }));
// router.route('/signin').post(passport.authenticate('local-signin', {
//   successRedirect:'/',
//   failureRedirect:'/signin'
// }));
// router.route('/signout').get((req, res)=>{
//   const name = req.user.username;
//   console.log(`logging out ${name}`);
//   req.logout();
//   res.redirect('/');
//   req.session.notice = `You have successfully been logged out ${name}`;
// });

// module.exports = router;