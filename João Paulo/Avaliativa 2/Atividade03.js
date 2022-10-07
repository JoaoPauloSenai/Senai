/*>>>>>>>>>>>>>>>>>> Atividade 3 (4,0) <<<<<<<<<<<<<<<<<<<<
Desenvolver a lógica de respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case. O quiz contém 3 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica.
1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?
A) Van Helsing (3 pontos)
B) Castlevania (3 pontos)
C) The Vampire Diaries (2 pontos)
D) Blade: The Series (1 ponto)
2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?
A) Alice no País das Maravilhas (3 pontos)
B) O Hobbit (2 pontos)
C) A Fantástica Fábrica de Chocolates (3 pontos)
D) Coraline (2 pontos)
3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?
A) The Legend of Zelda (3 pontos)
B) Kirby (2 pontos)
C) Metroid (2 pontos)
D) Super Mario Bros (4 pontos)
Critérios de avaliação:
(1,0) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
(1,0) Validar para que respostas com letra minúscula (a, b, c, d) também somem os pontos.
(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
(1,0) Mostrar a pontos ao final. Se conseguir pontuação máxima (10 pontos), incluir "Parabéns!"*/

let quest1, quest2, quest3, pontosQuest1, pontosQuest2, pontosQuest3, notaFinal;

alert("Bem-vindo ao mini-quiz onde todas as respostas possuem uma pontuação específica.")

quest1 = prompt("1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n A) Van Helsing\n B) Castlevania\n C) The Vampire Diaries\n D) Blade: The Series").toUpperCase()

switch (quest1){
case "A":
    pontosQuest1 = 3
    alert("Você ganhou 3 pontos")
    break
    case "B":
    pontosQuest1 = 3
    alert("Você ganhou 3 pontos")
    break
    case "C":
    pontosQuest1 = 2
    alert("Você ganhou 2 pontos")
    break
    case "D":
    pontosQuest1 = 1
    alert("Você ganhou 1 pontos")
    break
    default:
    alert("Você ganhou 0 pontos")
    break
}

quest2 = prompt("2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n A) Alice no País das Maravilhas\n B) O Hobbit\n C) A Fantástica Fábrica de Chocolates\n D) Coraline").toUpperCase()

switch (quest2){
case "A":
    pontosQuest2 = 3
    alert("Você ganhou 3 pontos")
    break
    case "B":
    pontosQuest2 = 2
    alert("Você ganhou 2 pontos")
    break
    case "C":
    pontosQuest2 = 3
    alert("Você ganhou 3 pontos")
    break
    case "D":
    pontosQuest2 = 2
    alert("Você ganhou 2 pontos")
    break
    default:
    alert("Você ganhou 0 pontos")
    break
}

quest3 = prompt("3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n A) The Legend of Zelda\n B) Kirby\n C) Metroid\n D) Super Mario Bros").toUpperCase()

switch (quest3){
case "A":
    pontosQuest3 = 3
    alert("Você ganhou 3 pontos")
    break
    case "B":
    pontosQuest3 = 2
    alert("Você ganhou 2 pontos")
    break
    case "C":
    pontosQuest3 = 2
    alert("Você ganhou 2 pontos")
    break
    case "D":
    pontosQuest3 = 4
    alert("Você ganhou 4 pontos")
    break
    default:
    alert("Você ganhou 0 pontos")
    break
}
notaFinal = pontosQuest1 + pontosQuest2 + pontosQuest3

if (notaFinal === 10){
    alert(`Sua pontuação final foi ${notaFinal}. Parabéns`)
}
else {
    alert(`Sua pontuação final foi ${notaFinal}. Que legal`)
}