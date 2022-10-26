/*let livro = {
    titulo: "jurassic Park",
    autor: "Michael Chricton",
    editora: "Rocco",
    paginas: 489

}
livro.copias = 5
livro.titulo = "Mundo Perdido"

alert(`${Object.entries(livro)}\n${Object.keys(livro)}\n${Object.values(livro)}`)*/

let nome = document.getElementById("inpNome")
let senha = document.getElementById("inpSenha")
let confSenha = document.getElementById("inpConfSenha")
let vetor = []

function CadastraUser() {

    let usuario = {

        username: "",
        password: "",
        confPassword: ""
    }

    usuario.username = nome.value
    usuario.password = senha.value
    usuario.confPassword = confSenha.value
    vetor.push(usuario)

    vetor = JSON.parse(localStorage.getItem('usuarioSalvo'))

    if (vetor === null) {

        vetor = []

        vetor.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetor))

    } else {

        vetor.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetor))

    }

    LimpaInputs()

    console.log(vetor)
}

function PesquisaUser() {

    for (i = 0; i < vetor.length; i++) {

        if (nome.value == vetor[i].username) {

            nome.value = vetor[i].username
            senha.value = vetor[i].password
            confSenha.value = vetor[i].confPassword

        }

    }

}

function LimpaInputs() {

    nome.value = ""
    senha.value = ""
    confSenha.value = ""

}

function ListaUser() {

    let lista = ""
    vetor = JSON.parse(localStorage.getItem('usuarioSalvo'))

    if (vetor == null) {
        lista = "Não existem usuário cadastrados"
    }

    else {
        for (let i = 0; i < vetor.length; i++) {

            lista += Object.values(vetor[i]).join(" - ") + '<br>'

        }

    }

    document.getElementById("Lista").innerHTML = lista

}
