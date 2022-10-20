let nomes = []
let addNome = document.getElementById("inp")
let excluiNome = document.getElementById("inp2")
let editaNome = document.getElementById("inp3")
let posiçaoIndice

function Cadastra() {

    nomes = JSON.parse(localStorage.getItem('nomes'))

    if (nomes === null) {

        nomes = []

        CadastraNome()

    } else {

        CadastraNome()

    }
}

function CadastraNome() {

    nomes.push(addNome.value)
    localStorage.setItem('nomes', JSON.stringify(nomes))
    document.getElementById("esquerda").innerHTML = nomes

}

function Excluir() {

    nomes = JSON.parse(localStorage.getItem('nomes'))
    posiçaoIndice = nomes.indexOf(excluiNome.value)
    if (excluiNome.value == nomes[posiçaoIndice]) {

        nomes.splice(posiçaoIndice, 1)
        localStorage.setItem('nomes', JSON.stringify(nomes))
        document.getElementById("esquerda").innerHTML = nomes

    }
    else {

        document.getElementById("esquerda").innerHTML = (`Nome não existente`)

    }

}

function Editar() {



}
function Pesquisar() {



}
function Listar() {



}
function Sair() {



}
