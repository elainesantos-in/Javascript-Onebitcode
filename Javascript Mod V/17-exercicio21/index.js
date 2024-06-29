const Mago = require("./Mago");
const Ladrao = require("./Ladrao");
const Guerreiro = require("./Guerreiro");

const arthur = new Mago('Arthur', 90, 4, 2, 14)
const beatrice = new Ladrao('Beatrice', 140, 22, 8)
const cain = new Guerreiro('Cain', 200, 14, 12, 4)

console.table({ arthur, beatrice, cain })

cain.alternarPosicao()
arthur.atacar(cain)
beatrice.atacar(arthur)

console.table({ arthur, beatrice, cain })

cain.atacar(arthur)
arthur.curar(arthur)
beatrice.atacar(cain)

console.table({ arthur, beatrice, cain })

