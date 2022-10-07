/*>>>>>>>>>>>>>>>>>>> Atividade 1 (3,0) <<<<<<<<<<<<<<<<<<<

Criar um sistema que receba os dados do usuário como pessoa (nome, nacionalidade, sexo e idade) para sinalizar se ele pode se cadastrar no sistema do governo brasileiro. Ao final mostrar mensagens para o usuário, indicando se ele pode se cadastrar ou não. Os seguintes critérios são adotados para o aceite de cadastro:

(1,0) O usuário deve ser brasileiro, do sexo masculino e ter entre 18 e 70 anos.
(1,0) O usuário deve ser brasileiro, do sexo feminino e ter entre 18 e 60 anos.
(1,0) O usuário, caso não seja brasileiro, deve morar no Brasil a mais de 5 anos e ter entre 21 e 35 anos.*/

let nome, nacionalidade, sexo, idade, tempo;

nome = prompt("Digite seu nome: ")
nacionalidade = prompt("Digite sua nacionalidade: ").toUpperCase()
sexo = prompt("Digite qual o seu sexo [M/F]: ").toUpperCase()
idade = Number(prompt("Digite a sua idade: "))
tempo = Number(prompt("Digite quantos anos você mora no brasil: "))

if (nacionalidade === "BRASIL" && sexo == "M" && idade >= 18 && idade <= 70) {
    alert(`O senhor pode se cadastrar no sistema do governo brasileiro.`)
}
else if (nacionalidade === "BRASIL" && sexo == "F" && idade >= 18 && idade <= 60) {
    alert(`A senhora pode se cadastrar no sistema do governo brasileiro.`)
}
else if (tempo >= 5 && idade >= 21 && idade <= 35) {
    alert(`Você pode se cadastrar no sistema do governo brasileiro.`)
}
    else {
    alert(`Você não pode se cadastrar no sistema do governo brasileiro.`)
}