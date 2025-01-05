require('dotenv').config();
const args = require('yargs').argv;

module.exports = {
  baseUrl: process.env.BASE_URL,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  browser: args.browser || process.env.BROWSER,
  timeout: 40000
}