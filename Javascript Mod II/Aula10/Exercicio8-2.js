/*Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.

O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.

O menu deve ter a opção de salvar um imóvel.

Para salvar um novo imóvel o programa deve pedir as seguintes informações:
Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.

O menu também deve ter a opção de mostrar todos os imóveis salvos.*/


/* COMO EU FIZ
let menu =""
let imoveisCadastrados = []
let numeroDeImoveis = 0
let i = 0


do{
 menu = prompt("Temos " + numeroDeImoveis + " imóveis em nosso catálogo" +
                    "\n1 - Salvar imóvel\n 2 - Vizualizar imóveis\n 3 - Sair"
                )
    switch(menu){
        case "1": 
            let cadastrandoImovel = {
                nomeProprietario: prompt("Qual o nome do proprietário?"),
                quantidadeQuartos: prompt("Quantos quartos tem?"),
                quantidadeBanheiros: prompt("Quantos banheiros tem?"),
                garagem: prompt("Possui garagem?")
            }
            imoveisCadastrados[i] = cadastrandoImovel
            alert("Imovel cadastrado com sucesso")
            numeroDeImoveis += 1
            i++
            break

        case "2":
            let todosImoveis = []
            for(let c = 0; c <= imoveisCadastrados.length; c++){
                todosImoveis[c] = imoveisCadastrados[c] + "\n"
                c++
            }
            if(numeroDeImoveis <=1){
                alert("Nosso catálogo possui " + numeroDeImoveis + " imovel cadastrados" + todosImoveis)
            }else{
                alert("Nosso catálogo possui " + numeroDeImoveis + " imoveis\n" + todosImoveis)
            }
            break

        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
        }

} while (menu !== "3");
*/

const imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )
  
  switch (opcao) {
    case "1":
        const imovel = {}
  
        imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
        imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
        imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
        imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")
  
        const confirma = confirm(
          "Salvar este imóvel?\n" +
          "\nProprietário: " + imovel.proprietario +
          "\nQuartos: " + imovel.quartos +
          "\nBanheiros: " + imovel.banheiros +
          "\nPossui Garagem? " + imovel.garagem
        )
  
        break
    case "2":
        for (let i = 0; i < imoveis.length; i++) {
            alert(
            "Imóvel " + (i + 1) +
            "\nProprietário: " + imoveis[i].proprietario +
            "\nQuartos: " + imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiros +
            "\nPossui Garagem? " + imoveis[i].garagem
        )
        }
        break

    case "3":
        alert("Saindo...")
        break

    default:
        alert("Opção inválida!")
        break
    }

} while (opcao !== "3");