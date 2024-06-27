/*
A principal diferença entre get e set em JavaScript está em suas funções:

get: É usado para acessar (ler) o valor de uma propriedade.

O método get é um método de acesso que permite definir uma função que será chamada quando a propriedade for lida.
Ele não aceita parâmetros e deve retornar um valor.
É usado para retornar o valor de uma propriedade.

const produto = new Produto('Notebook', 1500);
----------------------------------------------------------------------
set: É usado para modificar (escrever) o valor de uma propriedade.

O método set é um método de acesso que permite definir uma função que será chamada quando a propriedade for modificada.
Ele aceita um parâmetro, que é o novo valor a ser atribuído à propriedade.
É usado para definir ou modificar o valor de uma propriedade.

 */

class Produto {
    constructor(nome, preco) {
      this._nome = nome;
      this._preco = preco;
    }
  
    // Getter para a propriedade 'nome'
    get nome() {
      return this._nome;
    }
  
    // Setter para a propriedade 'nome'
    set nome(novoNome) {
      if (novoNome) {
        this._nome = novoNome;
      } else {
        console.log('Nome inválido!');
      }
    }
  
    // Getter para a propriedade 'preco'
    get preco() {
      return this._preco;
    }
  
    // Setter para a propriedade 'preco'
    set preco(novoPreco) {
      if (novoPreco > 0) {
        this._preco = novoPreco;
      } else {
        console.log('Preço inválido!');
      }
    }
  }
  
  const produto = new Produto('Notebook', 1500);
  
  // Usando getter e setter
  console.log(produto.nome); // Saída: Notebook
  produto.nome = 'Smartphone';
  console.log(produto.nome); // Saída: Smartphone
  
  console.log(produto.preco); // Saída: 1500
  produto.preco = 2000;
  console.log(produto.preco); // Saída: 2000