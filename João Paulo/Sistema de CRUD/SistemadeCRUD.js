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

    document.getElementById("baixo").innerHTML = cadastraNome = prompt(`Digite o nome a ser Cadastrado:`)
    arrayCadastrodeNomes.push(cadastraNome)

}

function Excluir() {

    document.getElementById("baixo").innerHTML = excluirNome = prompt("Digite o nome a ser Excluido:")
    posiçao = arrayCadastrodeNomes.indexOf(excluirNome)
    arrayCadastrodeNomes.splice(posiçao, 1)

}

function Editar() {

    document.getElementById("baixo").innerHTML = excluirNome = prompt("Digite o nome a ser Editado:")
    document.getElementById("baixo").innerHTML = editaNome = prompt("Digite o novo nome:")
    posiçao = arrayCadastrodeNomes.indexOf(excluirNome)
    arrayCadastrodeNomes.splice(posiçao, 1, editaNome)

}

function Pesquisar() {

    document.getElementById("baixo").innerHTML = pesquisar = prompt("Digite o nome a ser Pesquisado:")

    for (i = 0; i < arrayCadastrodeNomes.length; i++) {

        if (pesquisar === arrayCadastrodeNomes[i]) {

            document.getElementById("baixo").innerHTML = (`${arrayCadastrodeNomes[i]} está cadastrado no sistema.`)

        }
    }
}

function Listar() {

    document.getElementById("baixo").innerHTML = arrayCadastrodeNomes

}

function Sair() {

    document.getElementById("baixo").innerHTML = ("Adeus você saiu do Sistema de CRUD.")

}
