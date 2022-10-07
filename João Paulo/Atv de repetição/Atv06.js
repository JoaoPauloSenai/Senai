/* 6) Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”. */

let num, resto, impar = 0, media = 0

for (let i = 0; i < 5; i++) {

    num = Number(prompt(`Digite um numero:`))
    media = media + num
    resto = num % 2

    if (resto > 0) {

        impar++

    }
}
media = media / 5
if (impar > 0) {

    alert(`Possue pelo menos um numero impar`)
}
    else {
        alert(`A media foi: ${media}`)
}
