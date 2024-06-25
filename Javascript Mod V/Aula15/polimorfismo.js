//Para utilizar a sobrescrita de métodos basta reescrever 
//o método na classe filha utilizando o mesmo nome:

class Veiculo {
  mover() {
    console.log("O veículo está se movendo.")
  }
}

class Carro extends Veiculo {
  mover() {
    console.log("O carro está se movendo.")
  }
}

class Navio extends Veiculo {
  mover() {
    console.log("O navio está navegando.")
  }
}

class Aviao extends Veiculo {
  mover(speed) {
    console.log(`A aeronave está voando a ${speed} km/h.`)
  }
}

const delorean = new Carro()
const blackPearl = new Navio()
const epoch = new Aviao()

delorean.mover()
blackPearl.mover()
epoch.mover(80)
​
//Outra possibilidade incrível da sobrescrita de métodos é utilizar de forma 
//genérica objetos que obedecem a mesma interface:

function iniciar(veiculo) {
  console.log("Iniciando um veículo...")
  veiculo.mover() // pode ser qualquer subclass de Vehicle
}

iniciar(delorean)
iniciar(blackPearl)
iniciar(epoch)