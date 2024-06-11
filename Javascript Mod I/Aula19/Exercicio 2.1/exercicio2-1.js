/*Teste de Velocidade
Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba 
na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)*/


/*COMO EU FIZ ------------------------------------------------

const nomeCarro1 = prompt("Qual o nome do primeiro carro?");
const velocidadeCarro1 = prompt("Qual a velocidade do primeiro carro?");

const nomeCarro2 = prompt("Qual o nome do segundo carro?")
const velocidadeCarro2 = prompt("Qual a velocidade do segundo carro?");

if (velocidadeCarro1 > velocidadeCarro2){
    alert(`O ${nomeCarro1}  é mais rápido que o ${nomeCarro2}`)
} else if (velocidadeCarro1 == velocidadeCarro2) {
    alert('Os dois carros correram na mesma velocidade')
}else {
    alert(`O ${nomeCarro2}  é mais rápido que o ${nomeCarro1}`)
}
*/

const veiculo1 = prompt("Informe o nome do primeiro veículo:")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veículo:"))

const veiculo2 = prompt("Informe o nome do segundo veículo:")
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veículo:"))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido do que " + veiculo2)
  } else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " é mais rápido do que " + veiculo1)
  } else {
    alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.")
  }