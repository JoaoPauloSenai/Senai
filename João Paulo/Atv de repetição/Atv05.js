/* 5) Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **). */

let base, expoente

base = Number(prompt(`Digite um numero:`))
expoente = Number(prompt(`Digite o expoente:`))

x = base

for (let i = expoente - 1; i > 0; i--) {

    base = base * x

}
alert(`Resultado ${base}`)
