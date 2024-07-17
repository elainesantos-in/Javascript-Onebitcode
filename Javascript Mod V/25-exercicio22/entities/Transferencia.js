//Transfer: Deverá possuir atributos para: o usuário que enviou a transferência, o que recebeu a transferência, o valor e a data de criação.

module.exports = class Transferencia {
  constructor(deUsuario, paraUsuario, valor) {
    this.deUsuario = deUsuario;
    this.paraUsuario = paraUsuario;
    this.valor = valor;
    this.criadoEm = new Date();
    }
}
  
  
 