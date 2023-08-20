const express = require('express');
const router = express.Router();
const { saldo } = require('../controllers/saldoController');

router.get('/contas/saldo', saldo);

module.exports = router;
