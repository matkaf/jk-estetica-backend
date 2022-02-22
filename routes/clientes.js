const express = require('express');
const router = express.Router();
const validateToken = require('../auth/validateToken');
const Cliente = require('../controllers/cliente');

router.use( async (req, res, next) => {
  await validateToken(req, res, next);
})

router.get('/', Cliente.getAll);

router.post('/', Cliente.create);

module.exports = router;
