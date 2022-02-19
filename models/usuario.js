module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Usuarios'
  });

  return Usuario;
};
