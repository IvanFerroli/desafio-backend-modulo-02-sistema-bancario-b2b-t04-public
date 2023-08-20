const { contas, depositos } = require("../bancodedados");

function deposito(req, res) {
    const { numero_conta, valor } = req.body;

    if (!numero_conta || valor === undefined || valor <= 0) {
        return res.status(400).json({ mensagem: "Dados inválidos para o depósito" });
    }

    const contaIndex = contas.findIndex(conta => conta.numero === numero_conta);

    if (contaIndex === -1) {
        return res.status(404).json({ mensagem: "Conta não encontrada" });
    }

    contas[contaIndex].saldo += valor;

    const data = new Date().toISOString();
    const deposito = { data, numero_conta, valor };
    depositos.push(deposito);

    return res.status(200).json({ mensagem: "Depósito realizado com sucesso" });
}

module.exports = {
    deposito,
};
