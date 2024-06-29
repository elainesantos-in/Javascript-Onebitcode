module.exports = class Produto {
    constructor(nome, descricao, preco, emEstoque = 0) {
      this.nome = nome
      this.descricao = descricao
      this.preco = preco
      this.emEstoque = emEstoque
    }
  
    adicionarAoEstoque(quantidade) {
      this.emEstoque += quantidade
    }
  
    removerDoEstoque(quantidade) {
      this.emEstoque -= quantidade
    }
  }
  