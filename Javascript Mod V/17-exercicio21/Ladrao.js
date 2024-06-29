const Personagem = require("./Personagem");

module.exports = class Ladrao extends Personagem {
  atacar(personagemAlvo) {
    personagemAlvo.pontosDeVida -= (this.pontosDeAtaque - personagemAlvo.pontosDeDefesa) * 2
  }
}


/*
Uma classe Thief que representa um personagem de um tipo diferente.
    - Ela deve herdar os atributos de Character, mas deve sobrescrever o método de ataque para que o cálculo seja de duas 
    vezes a diferença entre os pontos de ataque do personagem atual e a defesa do alvo.
*/