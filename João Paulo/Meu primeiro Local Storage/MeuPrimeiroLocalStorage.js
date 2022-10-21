let nomes = []
let addNome = document.getElementById("inp")
let excluiNome = document.getElementById("inp2")
let alteraNome = document.getElementById("inp3")
let pesquisaNome = document.getElementById("inp4")
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

    nomes = JSON.parse(localStorage.getItem('nomes'))
    posiçaoIndice = nomes.indexOf(pesquisaNome.value)
    document.getElementById("esquerda").innerHTML = nomes[posiçaoIndice]

        if (pesquisaNome.value == nomes[posiçaoIndice]) {

        nomes.splice(posiçaoIndice, 1, alteraNome.value)
        localStorage.setItem('nomes', JSON.stringify(nomes))
        document.getElementById("esquerda").innerHTML = nomes

    }
    else {

        document.getElementById("esquerda").innerHTML = (`Nome não existente`)

    }

}
function Pesquisar() {

    nomes = JSON.parse(localStorage.getItem('nomes'))
    posiçaoIndice = nomes.indexOf(pesquisaNome.value)
    document.getElementById("esquerda").innerHTML = nomes[posiçaoIndice]

}
function Listar() {



}
function Sair() {



}
