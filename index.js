const express = require('express');
const cors = require('cors');
const clientes = require('./routes/clientes');
const admin = require('./routes/admin');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

app.use('/clientes', clientes);

app.use('/admin', admin);