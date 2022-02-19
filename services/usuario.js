const { Usuario } = require('../models');

const create = async (email, senha) => {
  try {
    const [user, created] = await Usuario.findOrCreate({
      where: { email },
      defaults: {
        email,
        senha,
      }
    });
  
    if (!created) {
      return { status: 400, message: 'E-mail já cadastrado'}
    }
  
    return user;
  } catch (error) {
    return { status: 500, message: error.message }
  }
}

module.exports = {
  create,
}