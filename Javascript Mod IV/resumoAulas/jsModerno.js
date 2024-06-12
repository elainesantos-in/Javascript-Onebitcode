//Template Literals - AS CRASES E CHAVE USADAS NAS ESTRINGS PARA REFERENCIAR VARIAIS TROCANDO POR CONTATENACOES '+'
const namee = 'Isaac'

console.log(`Olá, ${namee}!
Estamos em ${Date()}
  2 + 2 = ${2 + 2}
`)

//Arrow Functions----------------------------------AULA 5

//função normal********
function normalSum(a, b) {
    return a + b
  }
//console.log(`Soma normal: ${normalSum(2, 2)}`)

//função anonima********
const anonymousSum = function (a, b) {
    return a + b
  }
console.log(`Soma anônima: ${anonymousSum(2, 2)}`)
  
//arrow function -- é igual a normal porem mais simplificada ********
const arrowSum = (a, b) => {
    return a + b
  }
//console.log(`Soma arrow function: ${arrowSum(2, 2)}`)
  
const subtract = (a, b) => a - b
  
//console.log(`Subtração: ${subtract(5, 2)}`)
  
//const double = n => `O dobro de ${n} é ${n * 2}`
  
const number = 21
//console.log(`Dobro: ${double(number)}`)
  
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
  
const startingWithP = towns.filter(town => town[0] === 'P')
//console.log(startingWithP)

//Desestruturação de Objetos e Arrays-----------------------------AULA 6
const persona = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
  }
  
  const name = persona.name
  
  const { job, parents } = persona
  
  console.log(name, job, parents)
  
  const [father, mother] = parents
  
  console.log(father, mother)
  
  function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
      id,
      name,
      job,
      parents
    }
  }

//OPERADOR SPREAD "(...var)" -------------------------------- AULA 8

const townss = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

//console.log(towns)
//console.log(...towns)
//console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

//console.log({ towns, townsCopy })

const townsClone = [...townss]

townsClone.push('Aldebaran')

//console.log({ towns, townsCopy, townsClone })

const townsObj = { ...townss }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

//console.log({ townsObj, townsObjClone })

//PARAMETRO REST ----------------------------- AULA 9

function sum(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
  }
  
  console.log(sum(1, 1))
  console.log(sum(2, 2, 2, 2, 2))
  console.log(sum(32, 5, 74, 7, 1, 9, 90))

//ENCADEAMENTO OPCIONAL "?." --------------------------AULA 10

const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
  
  // console.log(user.friends[0].phone.ddd)
  console.log(user.friends[0].phone?.ddd)
  console.log(user?.brothers?.length)
  
  console.log(user.brothers?.[5].name)

//OPERADOR DE COALESCÊNCIA NULA "??" ----------------------------AULA 11

let a = 0

let b = a || 42

console.log({ a, b })

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log({c})


//Template Literals - AS CRASES E CHAVE USADAS NAS STRINGS PARA REFERENCIAR VARIAIS TROCANDO POR CONTATENACOES '+'
//Arrow Functions----------------------------------AULA 5
//Desestruturação de Objetos e Arrays-----------------------------AULA 6
//OPERADOR SPREAD "(...var)" -------------------------------- AULA 8
//PARAMETRO REST ----------------------------- AULA 9
//ENCADEAMENTO OPCIONAL "?." --------------------------AULA 10
//OPERADOR DE COALESCÊNCIA NULA "??" ----------------------------AULA 11

