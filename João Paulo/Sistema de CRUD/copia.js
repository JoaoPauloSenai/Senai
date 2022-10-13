let arrayCadastrodeNomes = []
let escolha
let cadastraNome
let excluirNome
let editaNome
let pesquisar
let posiçao

while (escolha != 0) {

    escolha = Number(prompt(`Escolha qual opção você deseja: 1 - Cadastrar nome, 2 - Excluir um nome, 3 - Editar um nome, 4 - Pesquisar se um nome está cadastrado, 5 - Listar todos os nomes cadastrados, 0 - Sair do programa`))

    switch (escolha) {

        case 1:

            cadastraNome = prompt(`Digite o nome a ser Cadastrado:`)
            arrayCadastrodeNomes.push(cadastraNome)
            alert(arrayCadastrodeNomes)

            break

        case 2:

            excluirNome = prompt("Digite o nome a ser Excluido:")
            posiçao = arrayCadastrodeNomes.indexOf(excluirNome)
            arrayCadastrodeNomes.splice(posiçao, 1)
            alert(arrayCadastrodeNomes)
            break

        case 3:

            excluirNome = prompt("Digite o nome a ser Editado:")
            editaNome = prompt("Digite o novo nome:")
            posiçao = arrayCadastrodeNomes.indexOf(excluirNome)
            arrayCadastrodeNomes.splice(posiçao, 1, editaNome)
            alert(arrayCadastrodeNomes)
            break

        case 4:

            pesquisar = prompt("Digite o nome a ser Pesquisado:")

            for (i = 0; i < arrayCadastrodeNomes.length; i++) {

                if (pesquisar === arrayCadastrodeNomes[i]) {

                    alert(`${arrayCadastrodeNomes[i]} está cadastrado no sistema.`)

                }
            }
            break

        case 5:

            alert(arrayCadastrodeNomes)
            break

        default:

            alert("0 - Sair do programa")

    }
}