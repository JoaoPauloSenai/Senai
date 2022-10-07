/*4) Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.*/

let vetor1 = []
let vetor2 = []
let vetor3 = []
let addvetor1
let addvetor2

for (let index = 1; index < 6; index++) {
    
    addvetor1 = prompt(`Digite o ${index}° do 1° vetor:`)
    vetor1.push(addvetor1)
    addvetor2 = prompt(`Digite o ${index}° do 2° vetor:`)
    vetor2.push(addvetor2)
    vetor3.push(addvetor1)
    vetor3.push(addvetor2)
}
alert(` Vetor 1: ${vetor1}.\n Vetor 2: ${vetor2}.\n Vetor 3: ${vetor3}.`)
