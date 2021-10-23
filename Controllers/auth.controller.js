const User = require('../Models/users.model');
const bcrypt = require('bcrypt');

module.exports = {
  register: async (req, res, next) => {
    try {
      await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] }).then((user) => {
        if (user) {
          return res.status(400).json({ msg: 'Another user has signed up with this username / email' });
        } else {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(req.body.password, salt);
          const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: hash
          });
          newUser.save();
          return res.status(200).json({ msg: `signed up successfully!, Welcome ${req.body.firstName}` });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}