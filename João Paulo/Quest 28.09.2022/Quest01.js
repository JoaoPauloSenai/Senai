/*1) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho OU gerar as cartas aleatoriamente nesse intervalo numérico).*/

let cartasjoga1, cartasjoga2, pontos1 = 0, pontos2 = 0;
let joga1, joga2;

joga1 = prompt(`Digite o nome do jogador 1:`)
joga2 = prompt(`Digite o nome do jogador 2:`)

for (let i = 0; i < 5; i++) {

    cartasjoga1 = Number(prompt(`Digite o valor da carta do jogador 1:`))
    pontos1 += cartasjoga1
    cartasjoga2 = Number(prompt(`Digite o valor da carta do jogador 2:`))
    pontos2 += cartasjoga2
    if (cartasjoga1 > 13 || cartasjoga1 < 1 || cartasjoga2 > 13 || cartasjoga2 < 1){
        break
    }
}
if (pontos1 > pontos2){

    alert(`O vencedor foi ${joga1} com ${pontos1} pontos.`)
}
else if (pontos1 < pontos2){

    alert(`O vencedor foi ${joga2} com ${pontos2} pontos.`)
}
else {

    alert(`Deu empate`)
}
