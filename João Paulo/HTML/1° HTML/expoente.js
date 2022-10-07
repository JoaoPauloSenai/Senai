/* Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação.*/

// Cria variáveis para armazenar os números
let base, expoente, resultado

    // Recebe os números e armazena nas variáveis
    base = Number(prompt("Digite o número base: "))
    expoente = Number(prompt("Digite o expoente: "))

    // Realiza o cálculo da exponenciação
    resultado = base ** expoente

// Mostra o resultado na tela
alert(`O resultado é ${resultado}`)

