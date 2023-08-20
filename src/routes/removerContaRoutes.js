express = require("express");
const router = express.Router();
const { removerConta } = require("../controllers/removerContaController");

router.delete("/contas/:numeroConta", removerConta);

module.exports = router;