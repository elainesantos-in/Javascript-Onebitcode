module.exports = class BancoDeDados {

    #armazenamento = {
      autores: [],
      livros: [],
      posters: [],
      pedidos: [],
      usuarios: []
    }

    encontrar(chave) {
      return this.#armazenamento[chave]
    }

    salvarAutor(autor) {
      this.#armazenamento.autores.push(autor)
    }
    
    encontrarLivroPeloNome(nomeDoLivro){
      return this.#armazenamento.livros.find(l => l.nome === nomeDoLivro)
    }
    
    salvarLivro(livro){
      const livroExite = this.encontrarLivroPeloNome(livro.nome)
      if(!livroExite){//se livroExiste for false
        this.#armazenamento.livros.push(livro)
      }
    }
    
    adicionarLivrosAoEstoque(nomeDoLivro, quantidade){
      const livro = this.encontrarLivroPeloNome(nomeDoLivro)
      livro?.adicionarAoEstoque(quantidade)
    }
    
    removerLivrosDoEstoque(nomeDoLivro, quantidade) {
      const livro = this.encontrarLivroPeloNome(nomeDoLivro)
      livro?.removerDoEstoque(quantidade)
    }

    encontrarPosterPeloNome(nomeDoPoster) {
      return this.#armazenamento.posters.find(p => p.nome === nomeDoPoster)
    }

    salvarPoster(poster) {
      const posterExiste = this.encontrarPosterPeloNome(poster.nome)
      if (!posterExiste) {
        this.#armazenamento.posters.push(poster)
      }
    }
   
    adicionarPostersAoEstoque(nomeDoPoster, quantidade) {
      const poster = this.encontrarPosterPeloNome(nomeDoPoster)
      poster?.adicionarAoEstoque(quantidade)
    }
    
    removerPostersDoEstoque(nomeDoPoster, quantidade){
      const poster = this.encontrarPosterPeloNome(nomeDoPoster)
      poster?.removerDoEstoque(quantidade)
    }
  
    salvarUsuario(usuario) {
      const usuarioExiste = this.#armazenamento.usuarios.find(u => u.email === usuario.email)
      if (!usuarioExiste) {
        this.#armazenamento.usuarios.push(usuario)
      }
    }
  
    salvarPedido(pedido) {
      this.#armazenamento.pedidos.push(pedido)
    }
  
    mostrarArmazenamento() {
      console.table(this.#armazenamento.autores)
      console.table(this.#armazenamento.livros)
      console.table(this.#armazenamento.posters)
      console.table(this.#armazenamento.usuarios)
      console.table(this.#armazenamento.pedidos.map(pedido => pedido.dados))
    }
  }
  