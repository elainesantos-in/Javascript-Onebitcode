/* Product que devera possuir:
- um atributo name, atribuível na instanciação
- um atributo description, atribuível na instanciação
- um atributo price, atribuível na instanciação
- um atributo inStock, inicializado sempre em 0
- um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e 
deve somar essa quantidade à variável inStock 
 -um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser 
aplicada e retorne o valor do preço com o desconto aplicado*/

class Product {
    constructor(nome, descricao, preco) {
        this.name = nome;
        this.description = descricao;
        this.price = parseFloat(preco.replace(',', '.')); // Converte o preço para número
        this.inStock = 0;
    }

    addToStock(quantidade){
        this.inStock += quantidade
    }

    calculateDiscount(desconto){
        const valorDesconto = (desconto / 100) * this.price;
        const precoComDesconto = this.price - valorDesconto;
        return precoComDesconto.toFixed(2);
        
    }

}
const novoProduto = new Product("Mesa", '8 lugares', '599,00');

console.log(novoProduto);

novoProduto.addToStock(5);
const precoComDesconto = novoProduto.calculateDiscount(25);


console.log(novoProduto)
console.log(precoComDesconto)

/* PROFESSOR----------------------
class Product {
  constructor (name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity) {
    this.inStock += quantity
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const watch = new Product("Relógio de Pulso", "...", 80)
watch.addToStock(99)
console.log(watch)
console.log(watch.calculateDiscount(15))
console.log(watch.calculateDiscount(10))

*/