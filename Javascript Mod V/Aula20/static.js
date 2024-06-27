/*
Métodos e propriedades estáticas são associados diretamente à classe e não às instâncias da classe. 
Isso significa que você pode chamar um método estático ou acessar uma propriedade estática diretamente 
através da classe, sem a necessidade de criar uma instância dessa classe.

Por que usar static?
Utilidade comum: Métodos estáticos são úteis para funções que não dependem de dados da instância.
Organização: Agrupa funções utilitárias relacionadas diretamente à classe.
Memória: Métodos estáticos são compartilhados entre todas as instâncias da classe, economizando memória.
*/


/*class ContaBancaria {
    constructor(saldoInicial) {
      this.saldo = saldoInicial;
    }
  
    // Método de instância
    depositar(valor) {
      this.saldo += valor;
    }
  
    // Método estático
    static taxaJuros() {
      return 0.05;
    }
  }
  
  // Usando métodos de instância
  const conta = new ContaBancaria(1000);
  conta.depositar(500);
  console.log(conta.saldo); // Saída: 1500
  
  // Usando o método estático
  console.log(ContaBancaria.taxaJuros()); // Saída: 0.05
  */

  class Reservation {
    constructor(guests, room, days) {
      this.guests = guests
      this.room = room
      this.days = days
      this.total = days * Reservation.baseFee
    }
  
    static baseFee = 150
  
    static showBaseFee() {
      console.log(`Base fee is ${Reservation.baseFee}`)
    }
  
    static get premiumFee() {
      return Reservation.baseFee * 1.5
    }
  }
  
  Reservation.showBaseFee()
  console.log(`Premium fee is $${Reservation.premiumFee}`)
  
  const r1 = new Reservation(3, "201", 5)
  console.log(r1)
  
  Reservation.baseFee = 200
  
  const r2 = new Reservation(2, '104', 2)
  console.log(r2)
  
  console.log(`Premium fee is $${Reservation.premiumFee}`)