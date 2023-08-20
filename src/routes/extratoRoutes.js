const express = require('express');
const router = express.Router();
const { extrato } = require('../controllers/extratoController');

router.get('/contas/extrato', extrato);

module.exports = router;