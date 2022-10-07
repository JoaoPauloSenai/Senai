/* 3) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade) */

let nome, idade, velho, maior = 0, media = 0;

for (i = 0; i < 5; i++) {
    nome = prompt(`Digite o nome: `)
    idade = Number(prompt(`Digite a idade: `))

    media = media + idade

    if (idade > maior) {

        maior = idade
        velho = nome

    }
}
media = media / 5

alert(`Maior idade é de ${velho} com ${maior} anos e a média é ${media}.`)
