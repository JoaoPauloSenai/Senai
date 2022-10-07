/*6) Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e/ou com palavras).*/

let vetor1 = []
let vetor2 = []
let addvetor

for (let i = 0; i < 6; i++) {
    
    addvetor = Number(prompt(`Digite um numero.`))
    vetor1.push(addvetor)
    vetor2.unshift(addvetor)
}

if(vetor1[i] == vetor2[i]){

    alert(`É palindromo ${vetor1}.`)

}
    else{

        alert(`Não é palindromo ${vetor2}.`)

    }


