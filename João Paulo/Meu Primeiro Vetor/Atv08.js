/*8) Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.*/

let vetor1 = []
let vetor2 = []
let vetor3 = []
let variavel1
let variavel2
let preto
let branco

for (let i = 0; i < 3; i++) {

    variavel1 = prompt(`Digite as cores:`)
    vetor1.push(variavel1)

}

for (let i = 0; i < 3; i++) {

    variavel2 = prompt(`Digite as cores:`)
    vetor2.push(variavel2)

}

vetor3 = vetor1.concat(vetor2)

preto = prompt(`Digite preto:`)
vetor3.unshift(preto)
branco = prompt(`Digite branco:`)
vetor3.push(branco)

alert(vetor3)