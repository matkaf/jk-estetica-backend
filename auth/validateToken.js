const jwt = require('jsonwebtoken');
require('dotenv/config');

const { Usuario } = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await Usuario.findOne({ where: { email: decoded.data.email }});

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token' })
    };

    req.user = user;

    next()
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}