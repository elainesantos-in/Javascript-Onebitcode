/*
App:
        - Deve possuir um atributo estático privado para a lista dos usuários do app.

        - Deve possuir um método estático para criar um novo usuário que só permite criar um usuário por email, ou seja, se o email já estiver sendo usado por outro usuário não deverá ser utilizado novamente.

        - Deve possuir um método estático para encontrar um usuário a partir do seu email.

        - Deve possuir métodos estáticos para realizar as operações de depósito, transferência e empréstimo. Elas devem ter como parâmetro as informações necessárias, como o email do usuário que está realizando a operação e o valor.
        Deve possuir um método para alterar a taxa dos empréstimos.
*/

module.exports = class App {
        #cliente = []

        static novoUsuario(nome, email, senha){
                const novoCliente = { }
                cliente.forEach((cliente.email) => {
                        if (email === cliente.email) {
                          console.log(`email existente, tente outro`)
                        }
                        else{   
                                return this.email
                                 
                        }
                      })

        }
}