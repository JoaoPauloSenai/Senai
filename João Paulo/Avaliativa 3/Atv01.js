/* >>>>>>>>>>>>>>>>>>> Atividade 1 (2,0) <<<<<<<<<<<<<<<<<<<

Em uma colação de grau, 20 alunos do curso Técnico de Informática estarão se formando. Como é necessário fazer uma fila para que os formandos recebam seu diploma, ao chegar no local o aluno deve informar o seu nome e idade, para organização da fila. Caso tenha menos de 25 anos, deve se dirigir ao início da fila, caso tenha 25 ou mais, deve se dirigir ao final da fila. Após a chegada de todos alunos, mostrar uma lista completa com os nomes na ordem que estão na fila.

Critérios de avaliação:

(0,5) Receber nome e idade dos alunos.
(1,0) Adicionar no local correto (início ou fim) da fila.
(0,5) Mostrar a lista completa com os nomes.*/

let nome, idade
let filaNome = [], filaIdade = []

for (let i = 0; i < 20; i++) {

    nome = prompt(`Digite o nome do aluno:`)
    idade = Number(prompt(`Digite a idade do aluno:`))

    if (idade > 25) {

        filaNome.push(nome)
        filaIdade.push(idade)

    }

    else {

        filaNome.unshift(nome)
        filaIdade.unshift(idade)

    }
    alert(`Nomes na fila de alunos: ${filaNome}\nIdade dos alunos ${filaIdade}`)
}
