let numeros = []
let addNumero

numeros = JSON.parse(localStorage.getItem('Numeros'))

if (numeros === null) {

    numeros = []

    Cadastra()

} else {

    Cadastra()

}
function Cadastra() {

    addNumero = Number(prompt("Digite um numero: "))
    numeros.push(addNumero)
    localStorage.setItem('Numeros', JSON.stringify(numeros))
    
}

