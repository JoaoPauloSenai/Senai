/*1) Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. Desenvolver um programa que remova os números a mais para corrigir essa lista. Mostrar a lista corrigida na tela.*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let index = 0; index < 10; index++) {
    
    numeros.pop();
    
}
    alert(numeros)
