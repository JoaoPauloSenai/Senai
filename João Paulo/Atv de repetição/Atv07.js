/* 7) Joãozinho mede 1,75m de altura e cresce 1 cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho. */

let joao = 175, pedrinho = 160, anos = 0

while (joao > pedrinho){

    pedrinho = pedrinho + 3
    joao = joao + 1
    anos ++
}
if (joao < pedrinho){

    alert(`Passaram-se ${anos} anos.`)

}


