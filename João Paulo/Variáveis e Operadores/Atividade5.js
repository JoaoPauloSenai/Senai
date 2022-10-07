//TC/5 = (TF – 32)/9
//5) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela.

let TC, TF;

    TC =  Number(prompt ("Digite a temperatura em graus Celsius"))

    TF = TC * 9/5 + 32

    alert (` A temperatura em Fahrenheit é: ${TF}`)