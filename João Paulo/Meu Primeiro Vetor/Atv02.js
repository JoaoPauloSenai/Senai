/*2) Desenvolva um programa que o usuário digite 10 números, ao final mostre o valor que resultado do somatório da primeira metade dos números menos o somatório da segunda metade.*/

let numeroDigitado = []
let somaPrimeira = 0
let somaSegunda = 0
let resultado = 0
let addNumero = 0

for (let i = 0; i < 10; i++) {
    
    addNumero = Number(prompt(`Digite um numero:`))

    numeroDigitado.push(addNumero)

    if(i <= 4){

        somaPrimeira += numeroDigitado[i]

    }
    else{

        somaSegunda += numeroDigitado[i]
    }

}    

resultado = somaPrimeira - somaSegunda

alert(resultado)
