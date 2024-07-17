/*
Conta: 
        - Deve possuir atributos para: o saldo, todos os depósitos realizados, todos os empréstimos, todas as transferências e para o dono da conta.

        - O atributo do saldo deve ser privado e somente de leitura, ou seja, seu valor não pode ser reatribuído, somente podendo ser modificado através dos depósitos, empréstimos e transferências.

        - Deve possuir um método para fazer um novo depósito, onde o valor do deposito será acrescentado ao saldo e a instância de Deposit ao atributos array de depósitos.

        - Deve possuir um método para fazer um novo empréstimo, que deverá acrescentar o valor do empréstimo ao saldo e salvar a instância de Emprestimo no atributo array de empréstimos.

        - Deve possuir um método de fazer uma transferência, onde é verificado se a transferência foi feita para o dono da conta ou pelo dono da conta para outro usuário. Se feito para o dono da conta, o valor dela deve ser acrescentado ao saldo. Se feito pelo dono da conta para outro usuário, o valor dela deve ser descontado do saldo. Além disso, a transferência deve ser salva no atributo array de transferências.
*/
module.exports = class Conta {
    #saldo
    // #depositos
    // #emprestimos
    // #transferencias
  
    constructor(usuario) {
      this.proprietario = usuario
      this.#saldo = 0
      this.depositos = []
      this.emprestimos = []
      this.transferencias = []
    }
  
    get saldo() {
      return this.#saldo
    }
  
    adicionarDeposito(deposito) {
      this.#saldo += deposito.valor
      this.depositos.push(deposito)
    }
  
    adicionarEmprestimo(emprestimo) {
      this.#saldo += emprestimo.valor
      this.emprestimos.push(emprestimo)
    }
  
    adicionarTransferencia(transferencia) {
      if (transferencia.paraUsuario.email === this.proprietario.email) {
        this.#saldo += transferencia.valor
        this.transferencias.push(transferencia)
      } else if (transferencia.deUsuario.email === this.proprietario.email) {
        this.#saldo -= transferencia.valor
        this.transferencias.push(transferencia)
      }
    }
  }
 
    