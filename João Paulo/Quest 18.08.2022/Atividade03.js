/*3) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".*/

let nome, idade, comorbidade

nome = prompt("Digite o seu nome: ")
idade = prompt("Digite a sua idade: ")
comorbidade = prompt("Digite possue comorbidade? [S/N]").toUpperCase()

if (idade > 60 || comorbidade == "S")
{
    alert(`Pode se vacinar!`)
}
    else
    {
        alert(`Não pode se vacinar!`)
    }