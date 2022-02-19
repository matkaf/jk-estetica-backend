const Usuario = require('../services/usuario');

const create = async (req, res) => {
  const { email, senha } = req.body;
  
  const response = await Usuario.create(email, senha);

  if (response.status) return res.status(response.status).json({ message: response.message });
  
  return res.status(201).json(response);
}

module.exports = {
  create,
}