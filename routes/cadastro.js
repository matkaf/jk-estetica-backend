const express = require('express');
const router = express.Router();
const Usuario = require('../controllers/usuario');

router.post('/', Usuario.create);

module.exports = router;
