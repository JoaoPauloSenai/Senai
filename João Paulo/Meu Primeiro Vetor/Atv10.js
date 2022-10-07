/*2) Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”*/
let resposta
let Array = []
let ultimoSim
let naoSim = "N"

for (let i = 0; i < 10; i++) {

    resposta = prompt(`Teve alistamento em 200${i}? [S/N]`).toUpperCase()
    Array.push(resposta)

    if (resposta == "S") {

        ultimoSim = i
        naoSim = "S"

    }

}
if (naoSim == "S") {

    alert(`O ultimo alistamento foi no ano de 200${ultimoSim}.`)

}
if (naoSim == "N") {

    alert(`Não houve alistamento nos últimos 10 anos`)

}