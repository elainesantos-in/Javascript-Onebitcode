/*Calculadora Geométrica
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 
O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 
O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.*/


/* COMO EU FIZ --------------

let menu = "" 

function aTriangulo(base,altura){
    return base * altura / 2
}
function aRetangulo(base,altura){
    return base * altura
} 
function aQuadrado(lado1){
    return Math.pow(lado1,2)
}
function aTrapezio(bMaior,bMenor,altur){
    return (bMaior + bMenor) * altur / 2
}
function aCirculo(raio){
    let pi= 3.14
    let calcularRaio = Math.pow(raio,2)
    return pi * calcularRaio
}

do{
    menu = prompt(
        "Olá, eu sou uma calculadora geométrica, escolha a area que deseja calcular:\n" + 
        "1 - Área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do trapézio\n5 - Área do círculo\n6 - Sair"
    )

    switch(menu){
        case "1":
           base1 = parseFloat(prompt("Qual o tamanho da base?")) 
           altura1 = parseFloat(prompt("Qual o tamanho da altura?"))
           let resultadoTriangulo = aTriangulo(base1,altura1)
           alert("A area do seu triangulo mede " + resultadoTriangulo + " metros quadrados")
           break

        case "2":
            base1 = parseFloat(prompt("Qual o tamanho da base?")) 
            altura1 = parseFloat(prompt("Qual o tamanho da altura?"))
            let resultadoRetangulo = aRetangulo(base1,altura1)
            alert("A area do seu retângulo mede " + resultadoRetangulo + " metros quadrados")
            break

        case "3":
            lado1 = parseFloat(prompt("Qual o tamanho dos lados?")) 
            let resultadoQuadrado = aQuadrado(lado1)
            alert("A area do seu retângulo mede " + resultadoQuadrado + " metros quadrados")
            break

        case "4":
            baseMaior = parseFloat(prompt("Qual o tamanho da base maior?")) 
            baseMenor = parseFloat(prompt("Qual tamanho da base menor?"))
            altura = parseFloat(prompt("Qual tamanho da altura?"))
            let resultadoTrapezio = aTrapezio(baseMaior,baseMenor,altura)
            alert("A area do seu trapézio mede " + resultadoTrapezio + " metros quadrados")
            break
        
        case "5":
            raio1 = parseFloat(prompt("Qual o tamanho do raio do seu circulo?")) 
            let resultadoCirculo = aCirculo(raio1)
            alert("A area do seu retângulo mede " + resultadoCirculo + " metros quadrados")
            break  

        case "6":
            alert("Saindo...")
            break
            
        default:
            alert("Opção inválida!")
            break
        }
         
}while(menu !== 6)
*/

function calcularAreaTriangulo() {
    const base = parseFloat(prompt("Informe a base do triângulo:"))
    const altura = parseFloat(prompt("Informe a altura do triângulo:"))
    return base * altura / 2
  }
function calcularAreaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retângulo:"))
    return base * altura
  }
function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Informe o lado do quadrado:"))
    return lado * lado
  }
function calcularAreaTrapezio() {
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const altura = parseFloat(prompt("Informe a altura do trapézio:"))
    return (baseMaior + baseMenor) * altura / 2
  }
function calcularAreaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return (3.14 * raio * raio)
  }
function exibirMenu() {
    return prompt(
      "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
    )
  }

function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
      let resultado
  
      switch (opcao) {
        case "1":
          resultado = calcularAreaTriangulo()
          break
        case "2":
          resultado = calcularAreaRetangulo()
          break
        case "3":
          resultado = calcularAreaQuadrado()
          break
        case "4":
          resultado = calcularAreaTrapezio()
          break
        case "5":
          resultado = calcularAreaCirculo()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }
  
      if (resultado) {
        alert("Resultado: " + resultado)
      }
  
    } while (opcao !== "6");
  }

  executar()