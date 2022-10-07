/*4) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"*/

let num01, num02

num01 = Number(prompt("Digite o 1°"))

num02 = num01 % 2

if(num02 == 0)
{
    alert("é par")
}
    else
    {
        alert("É impar")
    }