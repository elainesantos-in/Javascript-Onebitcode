import { Component } from "./Component.js";

export class Label extends Component {
    constructor(texto, pai, opcoes){
        super('label',pai , Object.assign({}, opcoes, {textContent: texto }))
    }
}
