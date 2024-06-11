/*Escreva um programa que permita inserir:
    - o nome 
    - e o poder de ataque de um personagem, 
depois 
    - o nome, 
    - a quantidade de pontos de vida, 
    - o poder de defesa de outro personagem
    - e se ele possui um escudo

e então calcule a quantidade de dano causado baseado nas seguintes regras:

Se o poder de ataque for maior do que a defesa |e o defensor não possuir um escudo,| o dano causado será igual a diferença entre o ataque e a defesa.
Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, 
    - o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor
    - e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.*/

    const atacante = prompt("Qual é o nome do personagem atacante?")
    const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

    const defensor = prompt("Qual é nome do personagem defensor?")
    let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
    const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
    const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

    let danoCausado = 0

    if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
        danoCausado = poderDeAtaque - poderDeDefesa
      } else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
        danoCausado = (poderDeAtaque - poderDeDefesa) / 2
      }
      pontosDeVida -= danoCausado

      alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
      alert(
        atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
        defensor + "\nPontos de vida: " + pontosDeVida +
        "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
    )

/* COMO EU FIZ ----------------------------------------------

const personagem1 = prompt("Qual o nome do personagem1?");
const ataque1 = prompt("Qual o seu poder de ataque?");
const nAtaque1 = parseFloat(ataque1)

const personagem2 = prompt("Qual o nome do personagem2");
const vida2 = prompt("Qual os pontos de vida?")
const nVida2 = parseFloat(vida2)
const defesa2 = prompt("Qual o seu poder de defesa?");
const nDefesa2 = parseFloat(defesa2)
const arma = prompt("Ele possui escudo?")

let menosDefesa = (nAtaque1 - nDefesa2)
let novaVida2 = (nVida2 - menosDefesa) 

    if(nAtaque1 > nDefesa2  && arma == "não"){
        
        alert(
            "Personagem 1: " + personagem1 +
            "\nPoder de ataque: " + nAtaque1 +

            "\nPersonagem 2: " + personagem2 +
            "\nPontos de vida: " + novaVida2 +
            "\nPoder de defesa: " + nDefesa2 +
            "\nEscudo: " + arma
            )

            }else if(nAtaque1 > nDefesa2  && arma == "sim"){

                let novaDefesa = (menosDefesa/2) - nVida2
                alert(
                    "Personagem 1: " + personagem1 +
                    "\nPoder de ataque: " + nAtaque1 +
        
                    "\nPersonagem 2: " + personagem2 +
                    "\nPontos de vida: " + novaDefesa +
                    "\nPoder de defesa: " + nDefesa2 +
                    "\nEscudo: " + arma
                    )
                
                        }else if (nAtaque1 <= nDefesa2){
                            alert(
                                "Personagem 1: " + personagem1 +
                                "\nPoder de ataque: " + nAtaque1 +
                    
                                "\nPersonagem 2: " + personagem2 +
                                "\nPontos de vida: " + nVida2 +
                                "\nPoder de defesa: " + nDefesa2 +
                                "\nEscudo: " + arma
                                )
                        }
*/
