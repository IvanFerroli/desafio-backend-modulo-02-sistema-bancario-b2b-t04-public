const bancodedados = require("../bancodedados");

function removerConta(req, res) {
    const numeroConta = req.params.numeroConta;
    const contaIndex = encontrarContaIndex(numeroConta);

    console.log(numeroConta, contaIndex)

    function encontrarContaIndex(numeroConta) {
        for (let i = 0; i < bancodedados.contas.length; i++) {
            if (bancodedados.contas[i].numero === numeroConta) {
                return i;
            }
        }
        return -1;
    }
    

    if (contaIndex === -1) {
        return res.status(404).json({
            mensagem: "Conta não encontrada",
            numeroConta: numeroConta,
            contaIndex: contaIndex
        });
    }

    const saldoConta = bancodedados.contas[contaIndex].saldo;

    if (saldoConta > 0) {
        return res.status(400).json({ mensagem: "Não é possível excluir conta com saldo positivo" });
    }

    bancodedados.contas.splice(contaIndex, 1);

    return res.status(200).json({ mensagem: "Conta excluída com sucesso" });
}

module.exports = {
    removerConta,
};
