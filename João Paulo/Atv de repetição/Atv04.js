/* 4) Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120). */

let fat, x;

fat = Number(prompt(`Digite o numero a ser calculado o fatorial:`))

x = fat

for (i = fat - 1; i > 0; i--) {

    x = x * i

}
alert(`O fatorial é ${x}`)
