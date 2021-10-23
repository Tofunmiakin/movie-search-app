const dotenv = require('dotenv');

dotenv.config();

const env = {
  MONGODB: {
    url: process.env.MONGO_DB_URL,
  },
};

module.exports = env;