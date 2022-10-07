/*4) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.*/

let op, conta, deposito, saque, saldo = 1000

conta = Number(prompt("Digite o numero da conta"))

menu()

function menu() {

    op = Number(prompt(">>>Digite uma a opção desejada<<< \n 1)Saldo \n 2)Deposito \n 3)Saque \n 4) Sair"))

    switch (op) {
        case 1:
            alert(`Saldo atual R$: ${saldo}.`)
            menu()
            break
        case 2:
            deposito = Number(prompt("Qual o valor do deposito"))
            saldo += deposito
            alert(`Saldo atual: R$${saldo}.`)
            menu()
            break
        case 3:
            saque = Number(prompt(`Qual o valor do saque?`))
            if (saque <= saldo) {
                saldo = saldo - saque
            }
            else {
                alert(`Saldo insuficiente:\n Valor R$${saldo}.`)
            }
            menu()
            break
        case 4:
            alert("Sair")
            break
        default:
            alert("Opção invalida")
            menu()
            break
    }
}