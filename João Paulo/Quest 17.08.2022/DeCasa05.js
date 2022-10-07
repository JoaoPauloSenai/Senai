/*Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa. (JS)*/

let disperdicio = 0, sobras = 0, mediaDeLitros;
let litros = 300, pessoas = 45

    disperdicio = Number(prompt ("Digite quanto litros foram desperdiçados: "))
    sobras = Number(prompt ("Digite quantos sobrou de chopp: "))

    mediaDeLitros = ((litros - disperdicio) - sobras) / 45;

    alert(`A media de litros bebedo por pessoa foi ${mediaDeLitros}, a sobra foi ${sobras} e o desperdiçio foi ${disperdicio}.`);
