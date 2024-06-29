const BancoDeDados = require("./BancoDeDados")
const Autor = require("./entities/Autor")
const Livro = require("./entities/Livro")
const Pedido = require("./entities/Pedido")
const Poster = require("./entities/Poster")
const Usuario = require("./entities/Usuario")


module.exports = class App {
  static #bancoDeDados = new BancoDeDados()
  
  criarUsuario(nome, email, senha) {
    const usuario = new Usuario(nome, email, senha)
    App.#bancoDeDados.salvarUsuario(usuario)
  }

  obterUsuarios() {
    return App.#bancoDeDados.encontrar('usuarios')
  }

  criarAutor(nome, nacionalidade, biografia) {
    const autor = new Autor(nome, nacionalidade, biografia)
    App.#bancoDeDados.salvarAutor(autor)
  }

  obterAutores() {
    return App.#bancoDeDados.encontrar('autores')
  }

  criarLivro(titulo, sinopse, genero, paginas, autor, descricao, preco, emEstoque) {
    const livro = new Livro(titulo, sinopse, genero, paginas, autor, descricao, preco, emEstoque)
    App.#bancoDeDados.salvarLivro(livro)
  }

  adicionarLivro(nomeDoLivro, quantidade) {
    App.#bancoDeDados.adicionarLivrosAoEstoque(nomeDoLivro, quantidade)
  }

  obterLivros() {
    return App.#bancoDeDados.encontrar('livros')
  }

  criarPoster(nome, descricao, altura, largura, preco, emEstoque) {
    const poster = new Poster(nome, descricao, altura, largura, preco, emEstoque)
    App.#bancoDeDados.salvarPoster(poster)
  }

  adicionarPoster(nomeDoPoster, quantidade) {
    App.#bancoDeDados.adicionarPostersAoEstoque(nomeDoPoster, quantidade)
  }

  obterPosters() {
    return App.#bancoDeDados.encontrar('posters')
  }

  criarPedido(itens, usuario) {
    const pedido = new Pedido(itens, usuario)
    App.#bancoDeDados.salvarPedido(pedido)
    pedido.dados.itens.forEach(({ produto, quantidade }) => {
      if (produto instanceof Livro) {
        App.#bancoDeDados.removerLivrosDoEstoque(produto.nome, quantidade)
      } else if (produto instanceof Poster) {
        App.#bancoDeDados.removerPostersDoEstoque(produto.nome, quantidade)
      }
    })
  }

  obterPedidos() {
    return App.#bancoDeDados.encontrar('pedidos')
  }

  mostrarBancoDeDados() {
    App.#bancoDeDados.mostrarArmazenamento()
  }
}
