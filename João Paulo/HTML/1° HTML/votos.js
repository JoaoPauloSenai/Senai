/* Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. */

// Cria variáveis para armazenar os eleitores, votos e percentuais
let totalEleitores, votosX, votosY, votosBrancos, votosNulos, percX, percY, percBrancos, percNulos

    // Recebe os números e armazena nas variáveis
    totalEleitores = Number(prompt("Total Eleitores: "))
    votosX = Number(prompt("Total Candidato X: "))
    votosY = Number(prompt("Total Candidato Y: "))
    votosBrancos = Number(prompt("Total Votos Brancos: "))
    votosNulos = Number(prompt("Total Votos Nulo: "))

    // Realiza os cálculos de percentual
    percX = ((votosX * 100) / totalEleitores).toFixed(2)
    percY = ((votosY * 100) / totalEleitores).toFixed(2)
    percBrancos = ((votosBrancos * 100) / totalEleitores).toFixed(2)
    percNulos = ((votosNulos * 100) / totalEleitores).toFixed(2)

// Mostra o relatório na tela
alert(`>>>>  Apuração dos Votos <<<<\n\nTotal de eleitores: ${totalEleitores}\nCandidato X: ${percX}% dos votos\nCandidato Y: ${percY}% dos votos\nBrancos: ${percBrancos}% dos votos\nNulos: ${percNulos}% dos votos`)

