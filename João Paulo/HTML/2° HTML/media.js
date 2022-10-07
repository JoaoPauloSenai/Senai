/* Criar um programa que realize o cálculo de uma média da faculdade. A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1), Projeto final (peso 3). O usuário deve digitar as três notas e a média deve ser mostrada na tela. */ 

// Cria variáveis para armazenar os elementos de HTML pelos seus id's
let nota1 = document.getElementById("n1")
let nota2 = document.getElementById("n2")
let nota3 = document.getElementById("n3")

// Cria variável para média
let media

// Cria função para calcular a média
function CalculaMedia(){

    // Realiza o cálculo da média ponderada
    media = (Number(nota1.value) + Number(nota2.value) + (Number(nota3.value) * 3))/5

    // Mostra a média na tela
    alert(`A média das notas é ${media}.`)

}