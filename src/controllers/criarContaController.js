const { contas } = require("../bancodedados");
const Conta = require("../models/contaModel");
const contasService = require("../services/contasService");

function criarConta(req, res) {
	const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

console.log(nome, cpf, data_nascimento, telefone, email, senha )

	const camposValidos = contasService.validarCamposObrigatorios(
		nome,
		email,
		cpf,
		data_nascimento,
		telefone,
		senha
	);

console.log(camposValidos )

	if (!camposValidos) {
		return res.status(400).json({ mensagem: "Dados incompletos" });
	}

	const cpfExistente = contas.find((conta) => conta.usuario.cpf === cpf);
	const emailExistente = contas.find(
		(conta) => conta.usuario.email === email
	);

	if (cpfExistente || emailExistente) {
		return res.status(400).json({ mensagem: "CPF ou e-mail já existem" });
	}

	const numeroConta = contasService.gerarNumeroContaUnico();

  console.log(numeroConta )

	const novaConta = new Conta(numeroConta, 0, {
		nome,
		cpf,
		data_nascimento,
		telefone,
		email,
		senha,
	});

	console.log(novaConta);

	contas.push(novaConta);

	return res.status(201).json({
		numero: numeroConta,
		saldo: 0,
		usuario: {
			nome,
			cpf,
			data_nascimento,
			telefone,
			email,
			senha,
		},
	});
}

module.exports = {
	criarConta,
};
