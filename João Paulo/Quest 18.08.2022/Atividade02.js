/*2) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se está abaixo ou acima do piso salarial mensal.*/

let salAnual, salmensal, pisoCategoria

salAnual = Number(prompt("Digite o salario anual"))
pisoCategoria = Number(prompt("Digite o piso salarial da categoria"))

salmensal = salAnual / 12

    if(salmensal < pisoCategoria)
    {
        alert(`O salario do funciionario é menor que o piso da categoria`)
    }
        else if(salmensal == pisoCategoria)
        {
            alert(`O salario do funcionario é igual ao piso da categoria`)
        }
            else
            {
                alert(`O salario do funciionario é maior que o piso da categoria`)
            }