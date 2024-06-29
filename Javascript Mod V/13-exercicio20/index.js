import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"

const elemen = new Component ('h1', 'body', { innerText: 'Olá, Mundo!'})

console.log(elemen)

elemen.tag = 'h2'
elemen.construir().renderizar

const formulario = new Form('body')
const label = new Label('Nome:', formulario, {htmlFor: 'nameImput'})
const input = new Input(formulario, {id: 'nameInput', name: 'birthday'})

formulario.renderizar()
label.renderizar()

formulario.addfilhos(input)


formulario.addfilhos(
  new Component('br'),
  new Component('br'),
  new Label('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
  new Input(formulario, { id: 'birthdayInput', name: 'birthday', type: 'date' })
)