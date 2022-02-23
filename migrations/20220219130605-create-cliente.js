'use strict';
const dateWithNoTZ = require('sequelize-date-no-tz-postgres');

module.exports = {
  async up(queryInterface, SequelizeBase) {
  const Sequelize = dateWithNoTZ(SequelizeBase);

    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeCompleto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sexo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataNascimento: {
        allowNull: false,
        type: Sequelize.DATE_NO_TZ,
      },
      celular: {
        type: Sequelize.STRING,
        unique: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};