module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nomeCompleto: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    celular: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return Cliente;
};