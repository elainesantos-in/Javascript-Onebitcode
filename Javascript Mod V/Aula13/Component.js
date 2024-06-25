/*
Crie um conjunto de classes em javascript para auxiliar na interação com o DOM.

Você deverá criar, no mínimo, 4 classes diferentes:
Uma classe para um elemento genérico do DOM 
(dica: utilize o nome Component, pois o nome Element poderá gerar conflitos com a implementação do navegador).

Essa classe deverá possuir um atributo privado para armazenar a referência ao elemento do DOM e um método de acesso
para ler o valor desse atributo.Ela também deve possuir um método build para criar o elemento que deve ser chamado
uma vez no construtor, mas também deve ser possível chamá-lo novamente através da instância.
Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela instância 
a qualquer momento. 

Essa classe deverá possuir um atributo privado para armazenar a referência ao elemento do DOM e um método de 
acesso para ler o valor desse atributo.

Ela também deve possuir um método build para criar o elemento que deve ser chamado uma vez no construtor, 
mas também deve ser possível chamá-lo novamente através da instância.

Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela 
instância a qualquer momento.

Uma classe específica para elementos input, que deve ser uma subclasse da classe Component.

Uma classe específica para elementos label, que deve ser uma subclasse da classe Component e no seu construtor 
deve ser possível indicar como primeiro parâmetro qual será o seu conteúdo em texto.

Uma classe específica para elementos form, que deve ser uma subclasse da classe Component e possuir um método 
para adicionar elementos como filhos (através das instâncias das classes Component e suas subclasses).

-----------------------------------------

Object.assign é um método em JavaScript utilizado para copiar os valores de todas as 
propriedades enumeráveis próprias de um ou mais objetos de origem para um objeto de destino. 
Este método retorna o objeto de destino. É frequentemente utilizado para combinar objetos ou adicionar 
propriedades e métodos a um objeto existente.

Object.assign(target, ...sources)

target: O objeto destino.
sources: Um ou mais objetos de origem cujas propriedades serão copiadas para o objeto destino.

1. Combinar Objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const combinedObj = Object.assign({}, obj1, obj2);

console.log(combinedObj); // { a: 1, b: 3, c: 4 }

2. Adicionar Propriedades a um Objeto Existente

const obj = { a: 1 };
Object.assign(obj, { b: 2, c: 3 });

console.log(obj); // { a: 1, b: 2, c: 3 }

3. Clonar um Objeto

const obj = { a: 1, b: 2 };
const clone = Object.assign({}, obj);

console.log(clone); // { a: 1, b: 2 }
*/

export class Component{
    #elemento = null

    constructor(tag, pai, opcoes){
        this.tag = tag
        this.pai = pai
        this.opcoes = opcoes
        this.construir()
    }

    getElement(){
        return this.#elemento
    }

    construir(){
        this.#elemento = document.createElement(this.tag)
        Object.assign(this.#elemento, this.opcoes)
        return this
    }

    renderizar() {
        if (this.pai instanceof Component) {
          this.pai.getElement().append(this.#elemento)
        } else {
          document.querySelector(this.pai).append(this.#elemento)
        }
    }
}
