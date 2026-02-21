const path = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'dev';

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${env}`)
});

module.exports = {
  env,
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
};