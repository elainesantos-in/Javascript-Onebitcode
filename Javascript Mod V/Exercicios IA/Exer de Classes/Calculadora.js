/*Exercício 5: Classe com Métodos Estáticos
Objetivo: Utilizar métodos estáticos para funções utilitárias.

Descrição: Crie uma classe Calculadora com métodos estáticos somar, subtrair, multiplicar, e dividir. Use a classe para realizar algumas operações matemáticas.

Quando terminar, me avise e eu te darei as respostas!*/

class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
  
    static multiplicar(a, b) {
      return a * b;
    }
  
    static dividir(a, b) {
      if (b === 0) {
        return 'Divisão por zero não é permitida';
      }
      return a / b;
    }
  }
  
  // Usando a classe Calculadora para realizar operações matemáticas
  console.log(Calculadora.somar(5, 3)); // Saída: 8
  console.log(Calculadora.subtrair(5, 3)); // Saída: 2
  console.log(Calculadora.multiplicar(5, 3)); // Saída: 15
  console.log(Calculadora.dividir(5, 0)); // Saída: Divisão por zero não é permitida
  console.log(Calculadora.dividir(5, 2)); // Saída: 2.5
  


