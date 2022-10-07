/*1) Elaborar um programa no qual sejam digitadas 4 notas. Deve ser calculada uma média e mostrada na tela. Se a média for maior ou igual a 7, mostrar uma mensagem "Aprovado", se for menor que 7, mostrar uma mensagem "Reprovado". (DESAFIO: Criar uma terceira condição para recuperação. Exemplo: Menor que 5 reprovado, entre 5 e 7 recuperação, maior ou igual aprovado).*/

let nota01, nota02, nota03, nota04, media;

nota01 = Number(prompt("Digite a 1° nota"))
nota02 = Number(prompt("Digite a 2° nota"))
nota03 = Number(prompt("Digite a 3° nota"))
nota04 = Number(prompt("Digite a 4° nota"))

media = (nota01 + nota02 + nota03 + nota04) / 4

    if(media >= 7)
    {
        alert(`Sua nota foi ${media} \nAluno aprovado`)
    }
        else if (media >= 5 && media < 7)
        {
            alert(`Sua nota foi ${media} \nAluno em recuperação`)
        }
            else
            {
                alert(`Sua nota foi ${media} \nAluno reprovado`)
            }