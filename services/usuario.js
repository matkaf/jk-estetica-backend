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
};

const login = async (email, senha) => {

  try {
    const usuario = await Usuario.findOne({ where: { email }});
    console.log('service:', usuario.senha);
    
    if (!usuario) return { status: 401, message: 'Usuário não encontrado' };

    if (usuario.senha !== senha) return { status: 401, message: 'Senha incorreta!' };

    return usuario;
  } catch (error) {
    return { status: 500, message: error.message };
  }

};


module.exports = {
  create,
  login,
}