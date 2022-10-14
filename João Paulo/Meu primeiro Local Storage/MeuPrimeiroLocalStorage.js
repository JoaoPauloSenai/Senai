let numeros = []
let addNumero = document.getElementById("inp")

function Cadastra() {

    numeros = JSON.parse(localStorage.getItem('Numeros'))

    if (numeros === null) {

        numeros = []

        CadastraNome()

    } else {

        CadastraNome()

    }
}

function CadastraNome() {

    numeros.push(addNumero.value)
    localStorage.setItem('Numeros', JSON.stringify(numeros))
    document.getElementById("esquerda").innerHTML = numeros

}