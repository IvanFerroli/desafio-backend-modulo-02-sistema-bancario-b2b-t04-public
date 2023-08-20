const { contas, saques } = require("../bancodedados");

function saque(numeroConta, valor, senha) {
  

    const conta = contas.find(conta => conta.numero === numeroConta);

    if (!conta) {
        return { success: false, mensagem: "Conta não encontrada" };
    }

    if (conta.usuario.senha !== senha) {
        return { success: false, mensagem: "Senha incorreta" };
    }

    if (valor <= 0) {
        return { success: false, mensagem: "Valor inválido" };
    }

    if (valor > conta.saldo) {
        return { success: false, mensagem: "Saldo insuficiente" };
    }

    const dataHora = new Date().toLocaleString();
    const saque = { data: dataHora, numero_conta: numeroConta, valor };
    saques.push(saque);

    conta.saldo -= valor;

    return { success: true, mensagem: "Saque realizado com sucesso" };
}

module.exports = {
    saque,
};
