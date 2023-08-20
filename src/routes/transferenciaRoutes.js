const express = require('express');
const router = express.Router();
const { transferencia } = require('../controllers/transferenciaController');

const teste = (req,res,next) => {
    console.log("aqui");
    next();
}

router.post('/transacoes/transferir',  teste ,transferencia);

module.exports = router;
