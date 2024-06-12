/* User que devera possuir:
um atributo fullname, atribuível na instanciação
um atributo email, atribuível na instanciação
um atributo password, atribuível na instanciação
um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros 
com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi
bem sucedido ou não */

class User {
    constructor (fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email2, password2) {
        if(this.email === email2 && this.password === password2) {
            console.log('Login bem sucedido');
        } else {
            console.log('Usuário ou senha inválidos');
        }
        //console.log(`Testando login com email: ${email2} e password: ${password2}`);
    }
}

const usuario1 = new User("Elaine", 'elaineleonidossantos@gmail.com', '0123456789');

console.log(usuario1);

// Teste de login
usuario1.login('elaineleonidossantos@gmail.com', '0123456789');  // Login bem sucedido
usuario1.login('elaineleonidossantos@gmail.com', 'senhaerrada'); // Usuário ou senha inválidos

/* PROFESSOR --------------------
class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('Login realizado com sucesso.')
    } else {
      console.log('Falha ao fazer login! Email ou senha incorretos.')
    }
  }
}

const john = new User("John Doe", "john@email.com", "123456")

john.login("john@email.com", "123456")
john.login("john@email.com", "654321")
*/