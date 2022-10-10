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
let cadastraNome
let excluirNome
let editaNome
let pesquisar
let posiçao

function Cadastra() {

    document.getElementById("esquerda").innerHTML = cadastraNome = document.getElementById("inp").value
    arrayCadastrodeNomes.push(cadastraNome)

}

function Excluir() {

    document.getElementById("esquerda").innerHTML = excluirNome = document.getElementById("inp2").value
    posiçao = arrayCadastrodeNomes.indexOf(excluirNome)

    for (i = 0; i < arrayCadastrodeNomes.length; i++) {

        if (excluirNome === arrayCadastrodeNomes[i]) {

            arrayCadastrodeNomes.splice(posiçao, 1)

        }
    }
}

function Editar() {

    document.getElementById("esquerda").innerHTML = editaNome = document.getElementById("inp").value
    document.getElementById("esquerda").innerHTML = excluirNome = document.getElementById("inp2").value
    posiçao = arrayCadastrodeNomes.indexOf(editaNome)
    if(posiçao != -1){

        arrayCadastrodeNomes[posiçao] = excluirNome
    }
    else
    document.getElementById("esquerda").innerHTML = ("Nome não encontrado")
}

function Pesquisar() {

    document.getElementById("esquerda").innerHTML = pesquisar = document.getElementById("inp").value

    for (i = 0; i < arrayCadastrodeNomes.length; i++) {

        if (pesquisar === arrayCadastrodeNomes[i]) {

            document.getElementById("esquerda").innerHTML = (`${arrayCadastrodeNomes[i]} está cadastrado no sistema.`)

        }
    }
}

function Listar() {

    document.getElementById("esquerda").innerHTML = arrayCadastrodeNomes

}

function Sair() {

    window.open("tchau.html")
    document.getElementById("esquerda").innerHTML = ("Adeus você saiu do Sistema de CRUD.")

}
