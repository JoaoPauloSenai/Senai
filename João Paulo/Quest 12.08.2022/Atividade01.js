/* Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. */

let candidatoUm, candidatoDois, brancos, nulos, totaldeVotos, percentualCandidatoUm, percentualCandidatoDois, percentualBrancos, percentualNulos;

    candidatoUm =  Number(prompt ("Digite quantos votos o 1° candidato recebeu: "))
    candidatoDois = Number(prompt ("Digite quantos votos o 2° candidato recebeu: "))
    brancos = Number(prompt ("Digite quantos votos foram brancos: "))
    nulos = Number(prompt ("Digite quantos votos foram nulos: "))

    totaldeVotos = candidatoUm + candidatoDois + brancos + nulos;

    percentualCandidatoUm = ((candidatoUm * 100)/ totaldeVotos).toFixed(2)
    percentualCandidatoDois = ((candidatoDois * 100)/ totaldeVotos).toFixed(2)
    percentualBrancos = ((brancos * 100)/ totaldeVotos).toFixed(2)
    percentualNulos = ((nulos * 100)/ totaldeVotos).toFixed(2)

    alert(` O total de votos é ${totaldeVotos}.\n O candidato Um teve ${percentualCandidatoUm}%.\n O candidato Dois teve ${percentualCandidatoDois}%.\n Brancos${percentualBrancos}%.\n Nulos ${percentualNulos}%.`)

