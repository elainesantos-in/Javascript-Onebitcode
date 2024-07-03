module.exports = class Pedido {
    #total
    #itens
    #usuario
  
    constructor(itens, usuario) {
      itens.forEach(({ produto, quantidade }) => {
        if (quantidade > produto.emEstoque) {
          throw new Error('Quantidade insuficiente em estoque!')
        }
      })

      //SERIO O MESMO QUE ESSE CODIGO

      /*itens.forEach(function(item) {
      const produto = item.produto;
      const quantidade = item.quantidade;
      });*/
      
      this.#itens = itens
      this.#usuario = usuario
      this.#total = itens.reduce((soma, { produto, quantidade }) => soma + (produto.preco * quantidade), 0)
    }
  
    get dados() {
      return {
        itens: this.#itens,
        usuario: this.#usuario,
        total: this.#total
      }
    }
  }
  
