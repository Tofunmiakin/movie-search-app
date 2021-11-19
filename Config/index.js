const dotenv = require('dotenv');

dotenv.config();

const env = {
  MONGODB: {
    url: process.env.MONGO_DB_URL,
  },

  SESSIONSECRET: process.env.SECRET,
};

module.exports = env;