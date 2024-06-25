 /*Exercício 1: Criar uma Classe Simples com Métodos
Objetivo: Criar uma classe básica com métodos e instanciar um objeto.
Descrição: Crie uma classe Produto com propriedades nome, preco, e quantidade. 
Adicione um método descrever que retorna uma string descrevendo o produto.
Instancie um objeto da classe Produto e imprima a descrição do produto.*/

module.exports = class Produto {
    constructor(nome,preco,quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    descrever(){
        const descricaoProduto = `Nome: ${this.nome} | Preço: R$${this.preco} | Quantidade: ${this.quantidade}`
        return descricaoProduto
    }
}


