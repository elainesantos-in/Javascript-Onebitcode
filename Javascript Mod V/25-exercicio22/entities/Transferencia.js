//Transfer: Deverá possuir atributos para: o usuário que enviou a transferência, o que recebeu a transferência, o valor e a data de criação.

module.exports = class Transferencia {
    constructor(nomeRemetente, nomeDestinatario, valor, data){
        this.nomeRemetente = nomeRemetente
        this.nomeDestinatario = nomeDestinatario
        this.valor = valor
        this.data = data
    }
}