module.exports = class Personagem {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa) {
    this.nome = nome
    this.pontosDeVida = pontosDeVida
    this.pontosDeAtaque = pontosDeAtaque
    this.pontosDeDefesa = pontosDeDefesa
  }

  atacar(personagemAlvo) {
    personagemAlvo.pontosDeVida -= this.pontosDeAtaque - personagemAlvo.pontosDeDefesa
  }
}

//module.exports = Personagem



   

/*Uma classe Character que representa um personagem de um jogo.
    - Ela deverá possuir atributos para nome, pontos de vida, de ataque e de defesa.
    - Ela também deverá possuir um método para atacar, que tem como argumento o personagem alvo (outra instância de Character)
    e subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do personagem atual e a defesa do alvo.
*/