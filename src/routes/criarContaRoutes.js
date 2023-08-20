const express = require("express");
const router = express.Router();
const { criarConta } = require("../controllers/criarContaController");

router.post("/contas", criarConta);

module.exports = router;
