/*Controle Financeiro
Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível 
e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair.
 Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com 
 a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as 
opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
*/

/* COMO EU FIZ -----------------------------------------------------------------------
let carteira = parseFloat(prompt("Qual valor você tem disponivel na carteira?"));
let opcoes = prompt(
  "Seu  saldo é de R$" + carteira + 
  "\nEscolha uma opção:" +
  "\n1 - Adicionar Dinheiro" + 
  "\n2 -  Remover Dinheiro" +
  "\n3 -  Sair" 
)
let valorAtualizado = carteira

do{
    switch(opcoes){
        case "1":
            let adicionar = parseFloat(prompt("Qual valor você deseja adicionar?"));
            valorAtualizado = valorAtualizado + adicionar
            opcoes = prompt(
                "Seu novo saldo é de R$" + valorAtualizado +
                "\nEscolha uma opção:" + 
                "\n1 - Adicionar Dinheiro" + 
                "\n2 -  Remover Dinheiro" +
                "\n3 -  Sair" 
            )
            break
        case "2":
            let removido = parseFloat(prompt("Qual valor você deseja remover?"));
            valorAtualizado = valorAtualizado - removido
            opcoes = prompt(
                  "Seu novo saldo é de R$" + valorAtualizado +
                  "\nEscolha uma opção:" +
                  "\n1 - Adicionar Dinheiro" + 
                  "\n2 -  Remover Dinheiro" +
                  "\n3 -  Sair" 
                )
              break
        case "3":
            alert = ("Saindo da sua carteira...")
            break
        default:
            alert("Entrada inválida! Escolha uma das cinco opções.")
        } 
  }while(opcoes !== "3")

*/
let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
      break
  }
} while (opcao !== "3");