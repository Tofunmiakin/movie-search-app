const mongoose = require('mongoose');

const ThirdPartyProviderSchema = new mongoose.Schema(
  {
    provider_name: {
      type: String,
      default: null
    },
    provider_id: {
      type: String,
      default: null
    },
    provider_data: {
      type: {},
      default: null
    },
  })

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add a first name']
    },
    lastName: {
      type: String,
      required: [true, 'Please add a last name']
    },
    username: {
      type: String,
      required: [true, 'Please add a username'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Please add an email address'],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email address'
      ]
    },
    email_is_verified: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: [true, 'Please add a password']
    },
    user_ratings: {
      type: [],
    },
    user_reviews: {
      type: []
    },
    third_party_auth: [ThirdPartyProviderSchema],
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false },
);

module.exports = User = mongoose.model('user', UserSchema);