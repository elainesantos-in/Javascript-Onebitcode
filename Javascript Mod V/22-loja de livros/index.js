const App = require('./App')

const app = new App()

app.criarAutor('J. R. R. Tolkien', 'Britânico', '...')
app.criarAutor('Rick Riordan', 'Americano', '...')

const autores = app.obterAutores()

app.criarLivro('O Hobbit', '...', 'fantasia', 300, autores[0], '...', 19.99, 100)
app.criarLivro('A Sociedade do Anel', '...', 'fantasia', 400, autores[0], '...', 24.99, 100)
app.criarLivro('O Ladrão de Raios', '...', 'fantasia', 500, autores[1], '...', 24.99, 100)
app.criarLivro('A Pirâmide Vermelha', '...', 'fantasia', 600, autores[1], '...', 24.99, 100)

const livros = app.obterLivros()

app.criarUsuario('Isaac', 'isaac@email.com', '123456')

const usuarios = app.obterUsuarios()

app.mostrarBancoDeDados()

const itens = [
  {
    produto: livros[0],
    quantidade: 2
  },
  {
    produto: livros[1],
    quantidade: 1
  },
  {
    produto: livros[3],
    quantidade: 1
  }
]

app.criarPedido(itens, usuarios[0])

app.mostrarBancoDeDados()
