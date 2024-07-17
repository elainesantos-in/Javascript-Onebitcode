/*
Usuario: Deve possuir atributos para nome completo, email e conta.
*/
const Conta = require("./Conta")

module.exports = class Usuario {
  constructor(email, nomeCompleto) {
    this.email = email
    this.nomeCompleto = nomeCompleto
    this.conta = new Conta(this)
  }
}


