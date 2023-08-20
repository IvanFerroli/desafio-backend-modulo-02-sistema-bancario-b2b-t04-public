const bancodedados = require('../bancodedados');

function transferencia(req, res) {
    console.log("oi")
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    const contaOrigem = bancodedados.contas.find(conta => conta.numero === numero_conta_origem);
    const contaDestino = bancodedados.contas.find(conta => conta.numero === numero_conta_destino);

    if (!contaOrigem || !contaDestino) {
        return res.status(404).json({ mensagem: "Conta de origem ou destino não encontrada" });
    }

    if (contaOrigem.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: "Senha incorreta" });
    } 

    if (valor > contaOrigem.saldo) {
        return res.status(400).json({ mensagem: "Saldo insuficiente para a transferência" });
    }

    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    const transacao = {
        data: new Date().toISOString(),
        numero_conta_origem,
        numero_conta_destino,
        valor
    };
    bancodedados.transferencias.push(transacao);

    return res.status(200).json({ mensagem: "Transferência realizada com sucesso" });
}

module.exports = {
    transferencia,
};
