const express = require("express");
const router = express.Router();
const { listarContas } = require("../controllers/contasController");

router.get("/contas", listarContas);

module.exports = router;
