const { Cliente } = require('../models/');

const create = async (info) => {
  try {
    console.log('createInfo:', info);
    const [cliente, created] = await Cliente.findOrCreate({
      where: { celular: info.celular },
      defaults: info,
    });

    if (!created) {
      return { status: 400, message: 'Celular já cadastrado' }
    }

    console.log(cliente);
    return cliente;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

const getAll = async () => {
  try {
    const response = await Cliente.findAll();

    if (!response.length) return { status: 400, message: 'Não existem clientes cadastrados' };

    return response;
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

module.exports = {
  create,
  getAll,
}