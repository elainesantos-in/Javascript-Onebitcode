/*Emprestimo:

        - Deverá possuir um atributo estático privado para a taxa de juros e que possuir um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de juros a partir de uma porcentagem.

        - Deverá possuir os atributos para o valor do empréstimo e para a data de criação.

        - Também deverá possuir um atributo para as parcelas do empréstimo, sendo que o construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de Installments) e armazená-las nesse atributo. */

const Parcelas = require("./Parcelas")

module.exports = class Emprestimo {

    static #taxaJurosAtual = 2.5

    constructor(valorEmprestimo, data, numeroParcelas){
        const valorParcela = Parcelas.valorParcela
        this.valorEmprestimo = valorEmprestimo
        this.data = data
        this.numeroParcelas = numeroParcelas 
        this.valorParcela = valorParcela
        
    }
    static get jurosAtual(){
        return Emprestimo.#taxaJurosAtual;
    }

    static set novJuros (novoJuros){
        if(novoJuros !== Emprestimo.#taxaJurosAtual ){
            return Emprestimo.#taxaJurosAtual = novoJuros
        }
    }

    static valorparcelas(){

    }
}
