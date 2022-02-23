# Passo a passo de preparação do ambiente do projeto:

1. `npm init` - iniciar a aplicação instalando o npm;

2. `npm install sequelize sequelize-cli express dotenv` - instala Sequelize, express e dotenv;

3. `npm install pg pg-hstore` ou `mysql2` - instala recursos de PostGres (supabase) ou MySQL;

4. `npm install -D nodemon` - instala o nodemon como dependencia dev;

5. `npm install jsonwebtoken` - instala o JSONWebToken para auth de usuarios;

6. `npx sequelize-cli init` - cria as models/migrations e seeders;

## Configuração do Sequelize:

<!-- OBS: alterar arquivo models/index.js para procurar o config.js -->
<!-- config/config.js -->
```
require('dotenv/config');

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": PASSWORD_POSTGRES,
    "database": DATABASE,
    "host": HOST,
    "port": DB_PORT,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": PASSWORD_POSTGRES,
    "database": DATABASE,
    "host": HOST,
    "port": DB_PORT,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": PASSWORD_POSTGRES,
    "database": DATABASE,
    "host": HOST,
    "port": DB_PORT,
    "dialect": "postgres"
  }
}
```
<!-- config/config.js -->

## Configuração do arquivo .env:

PASSWORD_POSTGRES= # aqui vai ser a senha que você criou
HOST= # o link para onde o banco está hospedado
DATABASE=postgres
DB_USERNAME=postgres
DB_PORT= # porta que o Supabase fornece

## Criando os models e migrations, conforme solicitado;

## Criar as rotas GET e POST necessárias para procurar/registrar dados;