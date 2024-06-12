/*Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.*/

function addPlayer() {
    const position = document.getElementById("position").value
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value
  
    const confirmation = confirm("Escalar " + name + " como " + position + "?")
  
    if (confirmation) {
      const teamList = document.getElementById("team-list")
      const playerItem = document.createElement("li")
      playerItem.id = "player-" + number
      playerItem.innerText = position + ": " + name + " (" + number + ")"
      teamList.appendChild(playerItem)
  
      document.getElementById("position").value = ""
      document.getElementById("name").value = ""
      document.getElementById("number").value = ""
    }
  }

  function removePlayer() {
    const number = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + number)
  
    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")
  
    if (confirmation) {
      document.getElementById("team-list").removeChild(playerToRemove)
      document.getElementById("numberToRemove").value = ""
    }
  }


/* COMO EU FIZ ----------------------------------------------------------------------------
let listaJogador = []

function escalarJogador(){
    const sessaoLista = document.getElementById('jogadoresEscalados')

    let posicaoJogador = document.querySelector('.posicaoJogador').value;
    let nomeJogador = document.querySelector('.nomeJogador').value;
    let nJogador = document.querySelector('.numeroJogador').value;
    let numeroJogador = Number(nJogador)

    const h1 = document.createElement('h1')
    const ul = document.createElement('ul')
    ul.className = 'fichaJogador'
    const nameLi = document.createElement('li')
    
    const confirma = confirm(
        "Deseja escalar esse jogador?\n" +
        "\nPosição: " + posicaoJogador +
        "\nJogador: " + nomeJogador +
        "\nNumero: " + numeroJogador
      )
  
      if (confirma) {
        sessaoLista.appendChild(ul)
        ul.appendChild(nameLi)
        let jogador = nameLi.innerText = "Nome: " + nomeJogador + "\n" + "Posição: " + posicaoJogador + "\n" + "Numero: " + numeroJogador 
        listaJogador.push(jogador) 
      }'
}

function removerJogador() {
    let numeroJogadorRemover = document.querySelector('.removeNumeroJogador').value;
    let numeroRemover = Number(numeroJogadorRemover);

    for (let i = 0; i < listaJogador.length; i++) {
        let jogador = listaJogador[i];
        if (numeroRemover === jogador.numeroJogador) { 
            const sessaoLista = document.getElementById('jogadoresEscalados');    
            const fichaJogador = Array.from(document.querySelectorAll('.fichaJogador'));

            // Remove o elemento do DOM
            sessaoLista.removeChild(fichaJogador[i]);

            // Remove o jogador da lista
            listaJogador.splice(i, 1);
        }
    }
}
*/
