const { contas } = require("../bancodedados");

function validarCamposObrigatorios(nome, cpf, data_nascimento, telefone, email, senha) {
    return nome && cpf && data_nascimento && telefone && email && senha;
  }
  
  function gerarNumeroContaUnico() {
    const proximoNumeroConta = contas.length + 1;
    return proximoNumeroConta.toString();
  }
  
  module.exports = {
    validarCamposObrigatorios,
    gerarNumeroContaUnico,
  };
  