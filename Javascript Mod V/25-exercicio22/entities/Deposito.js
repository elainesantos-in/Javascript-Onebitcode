//Deposit: Deverá possuir um atributo para o valor e um atributo para a data de criação.

module.exports = class Deposito {
    constructor(valor, data){
        this.valor = valor
        this.data = data
    }
}