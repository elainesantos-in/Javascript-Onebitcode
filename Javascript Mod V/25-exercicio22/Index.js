const App = require("./App")

App.criarUsuario("isaac@email.com", "Isaac Pontes")
App.criarUsuario("lucas@email.com", "Lucas Queiroga")
App.criarUsuario("juliana@email.com", "Juliana Conde")

App.depositar("isaac@email.com", 100)

App.transferir("isaac@email.com", "lucas@email.com", 20)

App.alterarTaxaEmprestimo(10)
App.fazerEmprestimo("juliana@email.com", 2000, 24)

console.log(App.encontrarUsuario("isaac@email.com"))
console.log(App.encontrarUsuario("isaac@email.com").conta)
console.log(App.encontrarUsuario("lucas@email.com"))
console.log(App.encontrarUsuario("lucas@email.com").conta)
console.log(App.encontrarUsuario("juliana@email.com"))
console.log(App.encontrarUsuario("juliana@email.com").conta)
console.log(App.encontrarUsuario("juliana@email.com").conta.emprestimos[0].parcelas)
