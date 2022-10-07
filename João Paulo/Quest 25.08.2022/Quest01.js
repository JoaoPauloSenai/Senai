/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:
A) Falar com a atendente B) Falar com o RH
C) Falar com o gerente D) Sair
Mostrar mensagens para cada opção!
(DESAFIO: Fazer voltar para o menu caso A, B, C)*/
let escolha;
menu()
function menu() {
    escolha = prompt(">>>Digite uma a opção desejada<<< \n A) Falar com a atendente \n B) Falar com o RH \n C) Falar com o gerente \n D) Sair").toUpperCase()

    switch (escolha) {
        case "A":
            alert("Falar com a atendente")
            menu()
            break
        case "B":
            alert("Falar com o RH")
            menu()
            break
        case "C":
            alert("Falar com o gerente")
            menu()
            break
        case "D":
            alert("Sair")
            break
        default:
            alert("opção invalida")
            menu()
            break
    }
}