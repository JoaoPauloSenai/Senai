let n
let numeros = []
let contagemTotal = []
let contagem0 = 0
let contagem1 = 0
let contagem2 = 0
let contagem3 = 0
let contagem4 = 0
let contagem5 = 0
let contagem6 = 0
let contagem7 = 0
let contagem8 = 0
let contagem9 = 0
let contagem10 = 0

for (let i = 0; i < 100; i++) {

    n = Math.random() * 10
    n = Math.round(n)
    numeros.push(n)

    switch (n) {
        case 0:
            contagem0++
            break
        case 1:
            contagem1++
            break
        case 2:
            contagem2++
            break
        case 3:
            contagem3++
            break
        case 4:
            contagem4++
            break
        case 5:
            contagem5++
            break
        case 6:
            contagem6++
            break
        case 7:
            contagem7++
            break
        case 8:
            contagem8++
            break
        case 9:
            contagem9++
            break
        case 10:
            contagem10++
            break
    }
}
contagemTotal.push(contagem0)
contagemTotal.push(contagem1)
contagemTotal.push(contagem2)
contagemTotal.push(contagem3)
contagemTotal.push(contagem4)
contagemTotal.push(contagem5)
contagemTotal.push(contagem6)
contagemTotal.push(contagem7)
contagemTotal.push(contagem8)
contagemTotal.push(contagem9)
contagemTotal.push(contagem10)

console.table(contagemTotal)