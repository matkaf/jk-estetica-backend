const express = require('express');
const clientes = require('./routes/clientes');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

app.use('/clientes', clientes);