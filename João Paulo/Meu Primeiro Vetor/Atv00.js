let numero = [8, 2, 8, 2, 8, 7, 12, 8, 12]
let pesquisaNumero = 8
let addNumero = []

for (let index = 0; index < numero.length; index++) {
    
    if (pesquisaNumero === numero[index]){

        addNumero.push(index)
    }
}
alert(`${addNumero}`)
