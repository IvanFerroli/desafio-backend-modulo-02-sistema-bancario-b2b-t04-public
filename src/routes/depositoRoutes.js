const express = require("express");
const router = express.Router();
const { deposito } = require("../controllers/depositoController");

router.post("/transacoes/depositar", deposito);

module.exports = router;