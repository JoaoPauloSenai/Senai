/*2) Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011)*/

let numero
numero = Number(prompt("Digite um numero: "))
switch(true)
{
    case numero >= 2011:
        alert("Geração Alfa (a partir de 2011)")
    break
    
    case numero >= 1997 && numero <= 2010:
        alert("Geração Z (1997-2010)")
    break
    
    case numero >= 1981 && numero <= 1996:
        alert("Geração Y ou Millennials (1981-1996)")
    break
    
    case numero >= 1965 && numero <= 1980:
        alert("Geração X (1965-1980)")
    break

    case numero >= 1946 && numero <= 1964:
        alert("Baby Boomers (nascidos entre 1946 e 1964)")
    break
    
    default:
        alert("Sem Geração (até 1945)")
    break
}