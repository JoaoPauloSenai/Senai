/* >>>>>>>>>>>>>>>>>>> Atividade 3 (4,0) <<<<<<<<<<<<<<<<<<<

Em um cassino, os desenvolvedores tiveram a ideia de simular um jogo de roleta com números de 1 a 50 e com 5 tentativas para o jogador. Criar um programa onde o jogador digite seus 5 palpites (números de 1 a 50) e armazene eles em uma lista (vetor). Caso o jogador digite um palpite que não seja de 1 a 50 ou repetido, mostrar uma mensagem de palpite inválido e perguntar novamente, pois não é permitido apostar números fora da faixa de apostas, nem repetidos. Após o jogador escolher os 5 números, mostrar na tela a lista de palpites, para conferência. Em seguida o programa deve gerar um número aleatório de 1 a 50 também e verificar se algum dos 5 palpites do jogador estava correto. Mostrar uma tela com o número sorteado e dizer se o jogador ganhou ou não. Ao final perguntar se ele deseja jogar novamente, caso responda SIM iniciar nova rodada, caso responda NÃO, encerrar o programa.

Critérios de avaliação:

(0,5) Receber os palpites do jogador, armazenar em um vetor e mostrar os palpites.
(1,0) Validar para que os palpites sejam de 1 a 50 e não repetidos.
(1,0) Gerar o número sorteado de 1 a 50.
(1,0) Mostrar uma tela com o número sorteado e o resultado, se acertou ou não.
(0,5) Dar opção ao jogador de jogar novamente ou não.*/

let palpitesTotais = []
let palpite = 0, verificaRepitido = 0, novoPalpite = 0, verificarRepitido = 0, n = 0
let numero, jogarNovamente

jogar()

function ganhou() {

    alert(`Você ganhou!!! O numero sorteado foi: ${numero}\n\nSeus palpites foram: ${palpitesTotais}`)

}

function perdeu() {

    alert(`Não foi dessa vez. O numero sorteado foi: ${numero}\n\nSeus palpites foram: ${palpitesTotais}`)

}

function jogar() {

    for (let i = 0; i < 5; i++) {

        if (palpite >= 0 && palpite <= 50 && palpitesTotais[verificaRepitido + 1] != palpite) {

            palpite = Number(prompt(`De UM palpite de um numero de 1 a 50`))
            palpitesTotais.push(palpite)
            verificaRepitido = palpitesTotais.indexOf(palpite)

        }
        else {

            alert(`Numero invalido digite novamente`)

        }
    }

    alert(`Seus palpites são: ${palpitesTotais}`)
    numero = Math.random() * 50
    numero = Math.ceil(numero)

    for (let i = 0; i < palpitesTotais.length; i++) {

        if (numero == palpitesTotais[i]) {

            n = numero

        }

    }

    if (n == numero) {

        ganhou()

    }
    else {

        perdeu()

    }

    jogarNovamente = prompt(`Deseja jogar novamente? [S/N]?`).toLocaleUpperCase()

    if (jogarNovamente == "S") {

        alert(`Jogar Novamente`)
        palpitesTotais.splice(0, 5)
        jogar()

    }
    else {

        alert(`Foi um bom jogo. Até a proxima.`)
    }
}