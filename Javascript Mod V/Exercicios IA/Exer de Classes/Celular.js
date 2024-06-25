/*Exercício 2: Adicionar Métodos e Validação
Objetivo: Adicionar métodos com validação para manipular as propriedades de um objeto.
Descrição: Adicione métodos vender e reabastecer à classe Produto para reduzir e aumentar a quantidade do produto, 
respectivamente. Adicione uma validação nos métodos para garantir que a quantidade nunca fique negativa.
*/

class Produto {
    constructor(nome,preco,quantidade = 5){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
        //this.estoque = this.estoque + quantidade
    }

    descrever(){
        const descricaoProduto = `Nome: ${this.nome} | Preço: R$${this.preco} | Quantidade: ${this.quantidade}`
        return descricaoProduto
    }

    abastecer(compra){
            this.quantidade += compra
            const aviso = `Seu estoque foi abastecido, você possui ${this.quantidade} ${this.nome}`
            return aviso;
    }

    vender(vender){
        let aviso = ''
        let resultado = this.quantidade - vender
        if(resultado < 0 ){
             aviso = 'Sua venda não pode ser concluida, por gentileza abasteça seu estoque para concluir a venda'
            return aviso;
        }else{
            this.quantidade -= vender
            aviso = `Seu venda foi concluida, você possui ${this.quantidade} ${this.nome} em estoque`
            return aviso;
        }
        
    }
}

const celular = new Produto('Iphone 15', 5000,5)

console.log(celular)

const abastecer = celular.abastecer(5)
console.log(abastecer)

const vender = celular.vender(11)
console.log(vender)

console.log(celular)


