/*Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50. (JS)*/

let largura, comprimento, metrosQuadrados, totalPago,QuantAzul ;

    largura = Number(prompt ("Digite quantos metros a piscina tem de largura: "))
    comprimento = Number(prompt ("Digite quantos metros a piscina tem de comprimento: "))

    metrosQuadrados = largura * comprimento
    totalPago = metrosQuadrados * 91
    QuantAzul = metrosQuadrados * 120

    alert(`Devem ser comprados ${QuantAzul} azulejos e o total a ser pago é ${totalPago}.`)
