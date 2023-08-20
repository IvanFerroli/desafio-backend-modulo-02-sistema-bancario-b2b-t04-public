const bancodedados = require('../bancodedados');

function extrato(req, res) {
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

    const extr = {
        depositos: bancodedados.depositos.filter(dep => dep.numero_conta === numero_conta),
        saques: bancodedados.saques.filter(saq => saq.numero_conta === numero_conta),
        transferenciasEnviadas: bancodedados.transferencias.filter(tr => tr.numero_conta_origem === numero_conta),
        transferenciasRecebidas: bancodedados.transferencias.filter(tr => tr.numero_conta_destino === numero_conta),
    };

    return res.status(200).json(extr);
}

module.exports = {
    extrato,
};
