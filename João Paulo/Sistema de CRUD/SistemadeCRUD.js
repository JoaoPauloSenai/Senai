/*1) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa*/

let arrayCadastrodeNomes = []
let escolha
let cadastraNome = document.getElementById("inp")
let excluirNome = document.getElementById("inp2")
let editaNome = document.getElementById("inp3")
let pesquisar = document.getElementById("inp")
let posiçao

function Cadastra() {

    arrayCadastrodeNomes.push(cadastraNome.value)
    document.getElementById("esquerda").innerHTML = cadastraNome.value

}

function Excluir() {

    posiçao = arrayCadastrodeNomes.indexOf(excluirNome.value)
    document.getElementById("esquerda").innerHTML = excluirNome.value

    for (i = 0; i < arrayCadastrodeNomes.length; i++) {

        if (excluirNome.value === arrayCadastrodeNomes[i]) {

            arrayCadastrodeNomes.splice(posiçao, 1)

        }
    }
}

function Editar() {

    posiçao = arrayCadastrodeNomes.indexOf(pesquisar.value)
    if (posiçao != -1) {

        arrayCadastrodeNomes[posiçao] = editaNome.value
        document.getElementById("esquerda").innerHTML = (`${editaNome.value} Foi adicionado(a) ao sistema.`)
    }
    else
        document.getElementById("esquerda").innerHTML = ("Nome não encontrado")
}

function Pesquisar() {

    if (arrayCadastrodeNomes != "") {

        for (i = 0; i < arrayCadastrodeNomes.length; i++) {

            if (pesquisar.value === arrayCadastrodeNomes[i]) {

                document.getElementById("esquerda").innerHTML = (`${arrayCadastrodeNomes[i]} está cadastrado no sistema.`)

            } else {

                document.getElementById("esquerda").innerHTML = (`${pesquisar.value} Não está cadastrado.`)

            }
        }
    }
    else{

        document.getElementById("esquerda").innerHTML = ("A lista de cadastro esta vazia.")

    }
}

function Listar() {

    document.getElementById("esquerda").innerHTML = arrayCadastrodeNomes

}

function Sair() {

    window.open("tchau.html")
    document.getElementById("esquerda").innerHTML = ("Adeus você saiu do Sistema de CRUD.")

}
