
    let nome = prompt("Qual o nome do recruta?: ");
    let sobrenome = prompt("Qual o sobrenome do recruta?: ");
    let campoDeEstudo = prompt("Qual o campo de estudo do recruta?: ");
    let anoDeNascimento = prompt("Qual o ano de nascimento do recruta?: ");

    alert(
        "Recruta cadastrado com sucesso!!\n" + 
        "\nNome completo: " + nome + " " + sobrenome + 
        "\nCampo de Estudo: " +  campoDeEstudo + 
        "\nIdade: " + (2024 - anoDeNascimento) + " ANOS"
    )
   
/* COMO EU FIZ
    let respostaUm = document.getElementById('nomeCompleto');
    let respostaDois = document.getElementById('campoDeEstudo');
    let respostaTres = document.getElementById('dataNascimento');
    
    let nome = prompt("Qual é o seu nome?");

    let sobrenome = prompt("Qual é o seu sobrenome?");
    respostaUm.innerText = "Nome completo: " + nome + " " + " " + sobrenome

    let campoDeEstudo = prompt("Qual curso você faz?");
    respostaDois.innerText = "Campo de estudo: " + campoDeEstudo

    let dataNascimento = prompt("Qual seu ano de nascimento?")
    let conta = 2024 - dataNascimento 
    respostaTres.innerText = "Idade: " + conta + " anos"
*/
