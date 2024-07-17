//Parcelas: Deve possuir atributos para: o valor da parcela, o número dela e sua situação (paga ou pendente)

module.exports = class Parcela {
  constructor(valor, numero) {
    this.valor = valor;
    this.numero = numero;
    this.status = 'pendente';
  }
}


  