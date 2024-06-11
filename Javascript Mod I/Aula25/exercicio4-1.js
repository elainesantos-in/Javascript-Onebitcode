/*Escreva um programa em javascript que peça 
o nome de um turista 
e então pergunte se ele já visitou alguma cidade.
Caso a resposta seja sim, 
pergunte o nome da cidade e o armazene em uma variável, 
e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. 

No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/

let nomeTurista = prompt("Qual o seu nome?")
let visitouCidade = prompt("Você já visitou alguma cidade? sim/não")
let nomeCidade = " "
let qCidadeVisitadas = 0
let cidades = ""

while(visitouCidade === "sim"){
    nomeCidade= prompt("Qual o nome da cidade?")
    cidades += " , " + nomeCidade + "\n"
    qCidadeVisitadas++
    visitouCidade = prompt("Você já visitou alguma cidade? sim/não")
}

alert(
    "Turista " + nomeTurista + 
    "\nQuantidade de cidades visitadas "  + qCidadeVisitadas +
    "\nCidades visitadas:\n" + cidades
)
