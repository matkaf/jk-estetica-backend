const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Autenticado com sucesso!');

  next();
})

router.get('/', (req, res) => {
  res.status(200).json('clientes home page');
});

module.exports = router;
