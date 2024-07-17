/*
App:
        - Deve possuir um atributo estático privado para a lista dos usuários do app.

        - Deve possuir um método estático para criar um novo usuário que só permite criar um usuário por email, ou seja, se o email já estiver sendo usado por outro usuário não deverá ser utilizado novamente.

        - Deve possuir um método estático para encontrar um usuário a partir do seu email.

        - Deve possuir métodos estáticos para realizar as operações de depósito, transferência e empréstimo. Elas devem ter como parâmetro as informações necessárias, como o email do usuário que está realizando a operação e o valor.
        Deve possuir um método para alterar a taxa dos empréstimos.
*/
const Deposito = require("./Deposito")
const Emprestimo = require("./Emprestimo")
const Transferencia = require("./Transferencia")
const Usuario = require("./Usuario")

module.exports = class App {
  static #usuarios = []

  static encontrarUsuario(email) {
    const usuario = this.#usuarios.find(usuario => usuario.email === email)
    return usuario ?? null
  }

  static criarUsuario(email, nomeCompleto) {
    const usuarioExiste = App.encontrarUsuario(email)
    if (!usuarioExiste) {
      this.#usuarios.push(new Usuario(email, nomeCompleto))
    }
  }

  static depositar(email, valor) {
    const usuario = App.encontrarUsuario(email)
    if (usuario) {
      const novoDeposito = new Deposito(valor)
      usuario.conta.adicionarDeposito(novoDeposito)
    }
  }

  static transferir(deEmailUsuario, paraEmailUsuario, valor) {
    const deUsuario = App.encontrarUsuario(deEmailUsuario)
    const paraUsuario = App.encontrarUsuario(paraEmailUsuario)
    if (deUsuario && paraUsuario) {
      const novaTransferencia = new Transferencia(deUsuario, paraUsuario, valor)
      deUsuario.conta.adicionarTransferencia(novaTransferencia)
      paraUsuario.conta.adicionarTransferencia(novaTransferencia)
    }
  }

  static fazerEmprestimo(email, valor, numeroDeParcelas) {
    const usuario = App.encontrarUsuario(email)
    if (usuario) {
      const novoEmprestimo = new Emprestimo(valor, numeroDeParcelas)
      usuario.conta.adicionarEmprestimo(novoEmprestimo)
    }
  }

  static alterarTaxaEmprestimo(novaTaxaPercentual) {
    Emprestimo.taxa = novaTaxaPercentual
  }
}



                        