/*3) Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças.*/

let quantDoenças, nomeDoença, tipoDoença
let listTodasDoenças = []
let listVirus = []
let listBacteria = []
let listAmbos = []

quantDoenças = Number(prompt(`Digite a quantidade de doenças:`))

for (let i = 0; i < quantDoenças; i++) {
    
    nomeDoença = prompt(`Digite o nome da doença:`)
    listTodasDoenças.push(nomeDoença)
    tipoDoença = prompt(`O que infecta o paciente?`).toUpperCase()

    if(tipoDoença == "VIRUS"){

        listVirus.push(nomeDoença)

    }
    else if(tipoDoença == "BACTERIA"){

        listBacteria.push(nomeDoença)

    }
    else if(tipoDoença == "AMBOS"){

        listAmbos.push(nomeDoença)

    }
    
}
alert(`A lista de todas as doenças ${listTodasDoenças}.`)
alert(`A lista de todas as doenças infectadas por virus ${listVirus}.`)
alert(`A lista de todas as doenças infectadas por bacterias ${listBacteria}.`)
alert(`A lista de todas as doenças infectadas por ambos ${listAmbos}.`)