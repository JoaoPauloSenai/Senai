//4) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.

let anoNascimento, anoAtual, resultado, meses, semanas, dias;

    anoNascimento =  Number(prompt ("Digite o de nascimento"))
    anoAtual = Number(prompt ("Digite o ano atual"))

    resultado = anoAtual - anoNascimento
    meses = resultado * 12
    semanas = resultado * 52
    dias = resultado * 365

alert (` Sua idade em anos é: ${resultado}.\n Em meses é: ${meses}.\n Em semanas é: ${semanas}.\n Em dias é: ${dias}.\n`)