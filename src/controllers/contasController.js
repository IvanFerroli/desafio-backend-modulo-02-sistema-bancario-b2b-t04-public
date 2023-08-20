const { contas } = require("../bancodedados");

function listarContas(req, res) {
    const senhaBancoInformada = req.query.senha_banco;

    if (senhaBancoInformada) {
        try {
            const contaEncontrada = contas.find((conta) => conta.usuario.senha === senhaBancoInformada);

            if (contaEncontrada) {
                console.log(contaEncontrada);
                return res.status(200).json(contaEncontrada);
            } else {
                return res.status(404).json({ mensagem: "Conta não encontrada" });
            }
        } catch (error) {
            return res.status(500).json({ mensagem: "Erro ao listar contas" });
        }
    } else {
        return res.status(400).json({ mensagem: "Senha do banco não informada" });
    }
}

module.exports = {
    listarContas,
};
