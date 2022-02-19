const jwt = require('jsonwebtoken');
require('dotenv/config');

const createToken = (data) => {
  const secret = process.env.JWT_SECRET;
  
  const config = {
    algorithm: 'HS256',
    expiresIn: '30d',
  }

  const token = (data) => jwt.sign({ data }, secret, config);

  return token;
}  

module.exports = createToken;
