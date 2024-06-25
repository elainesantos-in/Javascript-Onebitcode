const Personagem = require("./Personagem");

module.exports = class Mago extends Personagem {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa, pontosDeMagia) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa)
    this.pontosDeMagia = pontosDeMagia
  }

  atacar(personagemAlvo) {
    personagemAlvo.pontosDeVida -= (this.pontosDeAtaque + this.pontosDeMagia) - personagemAlvo.pontosDeDefesa
  }

  curar(personagemAlvo) {
    personagemAlvo.pontosDeVida += this.pontosDeMagia * 2
  }
}

/*
Uma classe Mage que representa outro tipo de personagem e também herda de Character. 
    - No entanto, essa classe também deve ter um atributo para pontos de magia.
    - Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados 
    aos pontos de magia.
    - A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar os pontos de vida de um personagem 
    alvo (passado como argumento do método) em um valor de duas vezes os pontos de magia do personagem atual.
*/