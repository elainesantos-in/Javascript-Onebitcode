const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
  )

/*COMO EU FIZ

numero1 = prompt("Digite um numero:")
numero2 = prompt("Digite um outro numero:")

numero1um = parseFloat(numero1)
numero2dois = parseFloat(numero2)

let respotaUm = document.getElementById('soma');
let respotaDois = document.getElementById('subtracao');
let respotaTres = document.getElementById('multiplicacao');
let respotaQuatro = document.getElementById('divisao');

let soma = numero1um + numero2dois
let subtracao = numero1um - numero2dois
let multiplicacao = numero1um * numero2dois
let divisao = numero1um / numero2dois

respotaUm.innerText = numero1um + " + " + numero2dois + " = " + soma
respotaDois.innerText = numero1um + " - " + numero2dois + " = " + subtracao
respotaTres.innerText = numero1um + " x " + numero2dois + " = " + multiplicacao
respotaQuatro.innerText = numero1um + " / " + numero2dois + " = " + divisao
*/