const dateWithNoTZ = require('sequelize-date-no-tz-postgres');

module.exports = (sequelize, SequelizeDataTypes) => {
  const DataTypes = dateWithNoTZ(SequelizeDataTypes);

  const Cliente = sequelize.define('Cliente', {
    nomeCompleto: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dataNascimento: DataTypes.DATE_NO_TZ,
    celular: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return Cliente;
};