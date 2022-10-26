let nome = document.getElementById("inputNome")
let senha = document.getElementById("inputSenha")
let confSenha = document.getElementById("inputConfSenha")

let vetorUsers = []

function Cadastra(){

    let usuario = {

        username: '',
        password: '',
        phones: []
    
    }

    usuario.username = nome.value
    usuario.password = senha.value
    

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

    if(vetorUsers == null){

        vetorUsers = []

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))

    }else{

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))

    }

    LimpaInputs()
    ListaUser()
    
}

function PesquisaUser(){

    for(i=0; i < vetorUsers.length; i++){

        if(nome.value == vetorUsers[i].username){

            nome.value = vetorUsers[i].username
            senha.value = vetorUsers[i].password
            confSenha.value = vetorUsers[i].confPassword

        }

    }

}

function ListaUser(){

    let lista = ''
    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

    if(vetorUsers == null){

        lista = 'Não existem usuários cadastrados! :('

    }else{

        for(i=0; i < vetorUsers.length; i++){
    
            lista = lista + Object.values(vetorUsers[i]).join(' - ') + '<br>'
    
        }
        
    }
    
    document.getElementById("Lista").innerHTML = lista    

}


function LimpaInputs(){

    nome.value = ''
    senha.value = ''
    confSenha.value = ''

}