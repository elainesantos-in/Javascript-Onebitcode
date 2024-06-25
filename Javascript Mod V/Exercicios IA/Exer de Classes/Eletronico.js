/*Exercício 3: Herança de Classes
Objetivo: Utilizar herança para criar classes derivadas.
Descrição: Crie uma classe Eletronico que herda de Produto e adiciona uma propriedade garantia. 
Instancie um objeto da classe Eletronico e imprima suas propriedades.*/

const Produto = require("./Produto");

module.exports = class Eletronico extends Produto {
    constructor(nome,preco,quantidade,garantia){
        super(nome,preco,quantidade)
        this.garantia = garantia
    }
}





