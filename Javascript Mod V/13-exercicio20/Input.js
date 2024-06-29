import { Component } from "./Component.js"

export class Input extends Component{
    constructor(pai, opcoes){
        super('input', pai, opcoes) /*quando quero chamar um metodos do da classe pai 
        que se estendeu essa nova classe chamo assim*/ 
    }
}
