module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuarios', {
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    username: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return Usuario;
};
