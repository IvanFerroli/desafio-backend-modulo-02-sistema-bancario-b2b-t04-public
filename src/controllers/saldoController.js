const bancodedados = require('../bancodedados');

function saldo(req, res) {
    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
        return res.status(400).json({ mensagem: "Parâmetros 'numero_conta' e 'senha' são obrigatórios" });
    }

    const conta = bancodedados.contas.find(conta => conta.numero === numero_conta);

    if (!conta) {
        return res.status(404).json({ mensagem: "Conta não encontrada" });
    }

    if (conta.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: "Senha incorreta" });
    }

    return res.status(200).json({ balanco: conta.saldo });
}

module.exports = {
    saldo,
};
