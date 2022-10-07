/* Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos. */

// Cria variáveis para armazenar os dados
let casais, individuais, areaTotal
// Cria variáveis e iniciliza com valores
let totalLeoes = 14, kmIndividual = 320, kmCasal = 400

    // Recebe e armazena na variável o número de casais
    casais = Number(prompt("Quantos casais no grupo leões: "))

    // Realiza o cálculo para descobrir individuais
    individuais = totalLeoes - (casais * 2)
    // Realiza o cálculo para descobrir a área total
    areaTotal = (individuais * kmIndividual) + (casais * kmCasal)

// Mostra o resultado na tela
alert(`A área total ocupada é ${areaTotal}km².`)
