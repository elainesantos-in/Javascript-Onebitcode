 /*Exercício 1: Criar uma Classe Simples com Métodos
Objetivo: Criar uma classe básica com métodos e instanciar um objeto.
Descrição: Crie uma classe Produto com propriedades nome, preco, e quantidade. 
Adicione um método descrever que retorna uma string descrevendo o produto.
Instancie um objeto da classe Produto e imprima a descrição do produto.

Exercício 2: Adicionar Métodos e Validação
Objetivo: Adicionar métodos com validação para manipular as propriedades de um objeto.
Descrição: Adicione métodos vender e reabastecer à classe Produto para reduzir e aumentar a quantidade do produto, 
respectivamente. Adicione uma validação nos métodos para garantir que a quantidade nunca fique negativa.
*/

class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this._preco = preco; // Usando _preco para encapsulamento
      this.quantidade = quantidade;
    }
  
    get preco() {
      return this._preco;
    }
  
    set preco(valor) {
      if (valor < 0) {
        console.log('O preço não pode ser negativo.');
      } else {
        this._preco = valor;
      }
    }
  
    descrever() {
      return `Produto: ${this.nome}, Preço: R$${this._preco}, Quantidade: ${this.quantidade}`;
    }
  }
  
  // Instanciando um objeto da classe Produto
  const produto4 = new Produto('Caneta', 1.5, 100);
  console.log(produto4.descrever()); // Saída: Produto: Caneta, Preço: R$1.5, Quantidade: 100
  produto4.preco = -5; // Saída: O preço não pode ser negativo.
  produto4.preco = 2.5;
  console.log(produto4.descrever()); // Saída: Produto: Caneta, Preço: R$2.5, Quantidade: 100
  


  