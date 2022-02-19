const express = require('express');
const router = express.Router();
const Usuario = require('../controllers/usuario');

router.post('/cadastro', Usuario.create);

router.post('/login', Usuario.login)

module.exports = router;
