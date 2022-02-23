module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nomeCompleto: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dataNascimento: DataTypes.DATEONLY,
    celular: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return Cliente;
};