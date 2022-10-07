
/*  Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação. */

let numeroum, numerodois, resultado;

    alert(` Este programa calcula a exponenciação de dois numeros`)

    numeroum =  Number(prompt ("Digite o 1° numero: "))
    numerodois = Number(prompt ("Digite 2° numero: "))
    
    resultado = numeroum ** numerodois
    //resultado = Math.pow(numeroum, numerodois) outra forma de fazer o mesmo que em cima
    
    alert(` A exponenciação é: ${resultado}`)

