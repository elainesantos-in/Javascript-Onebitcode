/*
App:
        - Deve possuir um atributo estático privado para a lista dos usuários do app.

        - Deve possuir um método estático para criar um novo usuário que só permite criar um usuário por email, ou seja, se o email já estiver sendo usado por outro usuário não deverá ser utilizado novamente.

        - Deve possuir um método estático para encontrar um usuário a partir do seu email.

        - Deve possuir métodos estáticos para realizar as operações de depósito, transferência e empréstimo. Elas devem ter como parâmetro as informações necessárias, como o email do usuário que está realizando a operação e o valor.
        Deve possuir um método para alterar a taxa dos empréstimos.
*/

module.exports = class App {
        #clientes = [
                { nome: 'Mateus', email: 'mateus@gmail.com', senha: 1234 },
                { nome: 'Elaine', email: 'elaine@gmail.com', senha: 4321 },
        ]
    
        novoUsuario(nome, email, senha) {
            let emailExistente = false;
            
            // Verifica se o email já existe
            this.#clientes.forEach(cliente => {
                if (cliente.email === email) {
                    emailExistente = true;
                }
            });
    
            if (emailExistente) {
                console.log('Email existente, tente outro');
                return ;
            } else {
                const novoCliente = { nome, email, senha };
                this.#clientes.push(novoCliente);
                console.log('Usuário adicionado com sucesso');
                return novoCliente;
            }
        }
    
        // Método para acessar clientes (opcional)
        getClientes() {
            return this.#clientes;
        }
    }
    


                        