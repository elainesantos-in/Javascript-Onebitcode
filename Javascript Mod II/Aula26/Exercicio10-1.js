/*Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e 
adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

Ter um menu onde é possível escolher entre as diferentes funcionalidades do sistema 

Listar vagas disponíveis
Criar um nova vaga
Visualizar uma vaga
Inscrever um candidato em uma vaga
Excluir uma vaga
Sair

1- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

2 - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir 
que o usuário confirme as informações antes de salvá-las.

3 - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição,
data limite, quantidade de candidatos e o nome dos candidatos.

4 - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação 
exibindo as informações da vaga antes de salvar o candidato na vaga.

5 - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a 
exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que 
possível, como os objetos, arrays e funções.*/

/*COMO EU FIZ ---- N]AO TERMINEI

let listaVagas = []


function exibirMenu() {
    return prompt(
    "1 - Listar vagas disponíveis\n" +
    "2 - Criar um nova vaga\n" +
    "3 - Visualizar uma vaga\n" +
    "4 - Inscrever um candidato em uma vaga\n"+
    "5 - Excluir uma vaga\n"+
    "6 - Sair"
    )
  }
function listarVagasDisponiveis(){
    let resposta = ""

    for(let i = 0; i <= listaVagas.length; i++){
      resposta += [(i + 1) + "º - "  + listaVagas[i].nomeVaga + "\n"]
    }
    alert(resposta)
}
    

function CriarVaga(){
    const novaVaga = {}

    novaVaga.nomeVaga = prompt("Informe o nome da vaga:")
    novaVaga.descricao = prompt("Descrição da vaga:")
    novaVaga.dataLimite = prompt("Qual a data de termino?")

    const confirma = confirm(
      "Salvar esta vaga de emprego?\n" +
      "\nVaga: " + novaVaga.nomeVaga +
      "\nDescrição: " + novaVaga.descricao +
      "\nValido até: " + novaVaga.dataLimite 
    )

    if (confirma) {
      listaVagas.push(novaVaga)
    }
}

function VizualizarVaga(){
    let vagaSelecionadaVizualizar 
    let vagaIndice = prompt("Qual o indice da vaga?")
    vagaSelecionadaVizualizar = listaVagas.filter(function (vagaI) {
        if (vagaIndice === vagaI){
            return alert("Vaga disponivel\n" + vagaSelecionadaVizualizar)
        }else{
           return alert("Opção inválida!")
        }
        
      })
}

function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
      let resultado
  
      switch (opcao) {
        case "1":
          resultado = listarVagasDisponiveis()
            break 
        case "2":
          resultado = CriarVaga()
            break
        case "3":
          resultado = VizualizarVaga()
          break
        case "4":
          break
        case "5":
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }
  
      //if (resultado) {
        //alert("Resultado: " + resultado)
      //}
  
    } while (opcao !== "6");
  }

  executar()*/

  const vagas = []

  function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
      textoFinal += indice + ". "
      textoFinal += vaga.nome
      textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
      return textoFinal
    }, "")
  
    alert(vagasEmTexto)
  }

  function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe um descrição para a vaga:")
    const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")
  
    const confirmacao = confirm(
      "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )
  
    if (confirmacao) {
      const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
      vagas.push(novaVaga)
      alert("Vaga criada.")
    }
  }

  function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = vagas[indice]
  
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
  
    alert(
      "Vaga nº " + indice +
      "\nNome: " + vaga.nome +
      "\nDescrição: " + vaga.descricao +
      "\nData limite: " + vaga.dataLimite +
      "\nQuantidade de candidatos: " + vaga.candidatos.length +
      "\nCandidatos inscritos:" + candidatosEmTexto
    )
  }

  function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vaga.candidatos.push(candidato)
      alert("Inscrição realizada")
    }
  }

  function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vagas.splice(indice, 1)
      alert("Vaga excluída.")
    }
  }

  function exibirMenu() {
    const opcao = prompt(
      "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
    )
  
    return opcao
  }

  function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
  
      switch (opcao) {
        case "1":
          listarVagas()
          break
        case "2":
          novaVaga()
          break
        case "3":
          exibirVaga()
          break
        case "4":
          inscreverCandidato()
          break
        case "5":
          excluirVaga()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida.")
      }
  
    } while (opcao !== "6");
  }
  
  executar()