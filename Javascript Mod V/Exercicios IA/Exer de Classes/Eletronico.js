/*Exercício 3: Herança de Classes
Objetivo: Utilizar herança para criar classes derivadas.
Descrição: Crie uma classe Eletronico que herda de Produto e adiciona uma propriedade garantia. 
Instancie um objeto da classe Eletronico e imprima suas propriedades.*/

// Definindo a classe Produto
class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    descrever() {
      return `Produto: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}`;
    }
  }
  
  // Definindo a classe Eletronico que herda de Produto
  class Eletronico extends Produto {
    constructor(nome, preco, quantidade, garantia) {
      super(nome, preco, quantidade);
      this.garantia = garantia;
    }
  
    descrever() {
      return `${super.descrever()}, Garantia: ${this.garantia} meses`;
    }
  }
  
  // Instanciando um objeto da classe Eletronico
  const eletronico1 = new Eletronico('Play Station', 3000, 5, 12);
  console.log(eletronico1.descrever()); // Saída: Produto: Play Station, Preço: R$3000, Quantidade: 5, Garantia: 12 meses
  

  





