/*Robô da Tabuada
Escreva um programa em javascript que seja capaz de calcular a
tabuada de um determinado número (de 1 a 20). 

O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados 
de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. 
Depois o programa deve exibir esses resultados e finalizar.*/


/* COMO EU FIZ --------------------------------------------
let tabuadaDe = parseFloat(prompt("Digite o numero da tabuada que dedeseja:"))
let suaTabuada = ""
let tabuada

for(let i = 1 ; i <= 20; i++){
    tabuada = tabuadaDe * i 
    suaTabuada += tabuadaDe + "x" + i + "=" + tabuada + "\n"
}
alert(
    suaTabuada
)
alert("Finalizando...")
*/

const numero = parseFloat(prompt("De qual número você deseja calcular a tabuada?"))
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)
