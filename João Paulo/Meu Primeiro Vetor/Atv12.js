/*4) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

a) A quantidade de produtos com preço inferior a R$50;
b) O nome dos produtos com preço entre R$50 e R$100;
c) A média dos preços dos produtos com preço superior a R$100.*/

let nomeProduto, valorProduto = 0, quantidadeMenorQue50 = 0, soma = 0, quantidadeProdutosMaiorQ100 = 0, media = 0
let preços = [], todosProdutos = [], de50a100 = [], maisde100

for (let i = 0; i < 5; i++) {

    nomeProduto = prompt(`Digite o nome do produto:`)
    todosProdutos.push(nomeProduto)
    valorProduto = Number(prompt(`Digite o valor do produto:`))
    preços.push(valorProduto)

    if (valorProduto < 50) {

        quantidadeMenorQue50++

    }

    else if (valorProduto >= 50 && valorProduto < 100) {

        de50a100.push(nomeProduto)

    }

    else {

        soma += valorProduto
        quantidadeProdutosMaiorQ100++

    }

}
media = soma / quantidadeProdutosMaiorQ100

alert(`Tem ${quantidadeMenorQue50} produtos custando menos de 50R$.`)
alert(`O nome dos produtos com preço entre 50R$ e 100R$ são ${de50a100}`)
alert(`A média dos preços dos produtos com preço superior a R$100 é ${media}`)