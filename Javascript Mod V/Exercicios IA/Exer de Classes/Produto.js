 /*Exercício 1: Criar uma Classe Simples com Métodos
Objetivo: Criar uma classe básica com métodos e instanciar um objeto.
Descrição: Crie uma classe Produto com propriedades nome, preco, e quantidade. 
Adicione um método descrever que retorna uma string descrevendo o produto.
Instancie um objeto da classe Produto e imprima a descrição do produto.

Exercício 4: Encapsulamento
Objetivo: Usar métodos getter e setter para controlar o acesso às propriedades.
Descrição: Modifique a classe Produto para encapsular a propriedade preco com 
métodos getter e setter, garantindo que o preço não possa ser negativo.

*/



module.exports = class Produto {
    constructor(nome,preco,quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    get validandoPreco(){
        if(this.preco < 0 ){
            let aviso = `O preço invalido`
            return aviso
        }else{
            return this.preco
        }
    }

    set validPreço(validandoPreco){
        return validandoPreco
    }

    descrever(){
        const descricaoProduto = `Nome: ${this.nome} | Preço: R$${this.preco} | Quantidade: ${this.quantidade}`
        return descricaoProduto
    }
}


