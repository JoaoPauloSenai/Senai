/*7) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra.*/

let vetor1 = [9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let vetor2 = []
let pergunta

pergunta = Number(prompt(`Digite um numero:`))

for (let i = 0; i < vetor1.length; i++) {
    
    if(pergunta == vetor1[i]){

        vetor2.push(i)

    }
    
}

alert(vetor2)







