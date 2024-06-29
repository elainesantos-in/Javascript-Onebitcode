import { Component } from "./Component.js";

export class Form extends Component {
    constructor(pai, opcoes){
        super('form', pai, opcoes);
    }
    
    addfilhos(...filhos){
        filhos.forEach(filho => {
            this.getElement().appendChild(filho.getElement());
        });
    }
}

