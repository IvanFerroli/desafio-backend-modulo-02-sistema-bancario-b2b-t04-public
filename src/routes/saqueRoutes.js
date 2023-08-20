const express = require("express");
const router = express.Router();
const { saque } = require("../controllers/saqueController");

router.post("/transacoes/sacar", (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    const resultadoSaque = saque(numero_conta, valor, senha);

    if (resultadoSaque.success) {
        return res.status(200).json({ mensagem: resultadoSaque.mensagem });
    } else {
        return res.status(400).json({ mensagem: resultadoSaque.mensagem });
    }
});

module.exports = router;
