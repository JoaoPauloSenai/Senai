/*1) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações.*/
let numero = 0
let vetor = []
let vetorSemMaior = []
let maior = 0
let mult = 0
let resultado = 0
for (let i = 0; i < 5; i++) {   
    numero = Number(prompt(`Digite um numero:`))
    vetor.push(numero)

    if(numero > maior){

    maior = numero
    }   
}
for (let i = 0; i < vetor.length; i++) {
    
    if(maior != vetor[i]){

        vetorSemMaior.push(vetor[i])
        
    }
}
for (let i = 0; i < vetorSemMaior.length; i++) {
    
    mult = maior * vetorSemMaior[i]
    resultado += mult
    
}
alert(maior)
alert(vetor)
alert(vetorSemMaior)
alert(resultado)