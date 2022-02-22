const Cliente = require('../services/cliente');

const create = async (req, res) => {
  const info = req.body;
  const novoCliente = await Cliente.create(info);

  if (novoCliente.status) return res.status(novoCliente.status).json({ message: novoCliente.message });

  return res.status(201).json(novoCliente);
};

const getAll = async (_req, res) => {
  const response = await Cliente.getAll();

  if (response.status) return res.status(response.status).json({ message: response.message });

  return res.status(200).json(response);
};

module.exports = {
  create,
  getAll,
}