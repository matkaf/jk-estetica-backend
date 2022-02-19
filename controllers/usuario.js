const Usuario = require('../services/usuario');
const createToken = require('../auth/createToken');

const create = async (req, res) => {
  const { email, senha } = req.body;
  
  const response = await Usuario.create(email, senha);

  if (response.status) return res.status(response.status).json({ message: response.message });
  
  return res.status(201).json(response);
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.login(email, senha);
  console.log('controller:', usuario);

  if (usuario.status) return res.status(usuario.status).json({ message: usuario.message });

  const token = createToken(usuario);
  console.log('token:', token);
  return res.status(200).json({ authorization: token });
};

module.exports = {
  create,
  login,
}