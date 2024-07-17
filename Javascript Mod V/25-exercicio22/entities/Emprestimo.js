/*Emprestimo:
        - Deverá possuir um atributo estático privado para a taxa de juros e que possuir um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de juros a partir de uma porcentagem.
        - Deverá possuir os atributos para o valor do empréstimo e para a data de criação.
        - Também deverá possuir um atributo para as parcelas do empréstimo, sendo que o construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de Installments) e armazená-las nesse atributo. */
const Parcelas = require('./Parcelas');

module.exports = class Emprestimo {
  static #taxa = 1.05

  constructor(valor, parcelas) {
    this.valor = valor
    this.parcelas = []
    for (let i = 1; i <= parcelas; i++) {
      this.parcelas.push(new Parcelas((valor * Emprestimo.#taxa) / parcelas, i))
    }
    this.criadoEm = new Date()
  }

  static get taxa() {
    return Emprestimo.#taxa
  }

  static set taxa(novaTaxaPercentual) {
    Emprestimo.#taxa = 1 + (novaTaxaPercentual / 100)
  }
}

          
          