/*5) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta)*/

let saladaFrutas = []
let addfruta
let frutaFinal = "cereja"

do {

    addfruta = prompt(`Digite a fruta:`).toLocaleLowerCase()
    saladaFrutas.push(addfruta)

}
while(addfruta != frutaFinal)

alert(`Sua salada de frutas contém: ${saladaFrutas}.`)
