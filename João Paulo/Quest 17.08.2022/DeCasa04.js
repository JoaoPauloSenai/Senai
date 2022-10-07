/*Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. (JS)*/

let plastico, papel, metal, vendaPlastico, vendaPapel, vendaMetal, vendaTotal

plastico =  Number(prompt ("Digite quantos Kgs de plástico deseja entregar: "))
papel =  Number(prompt ("Digite quantos Kgs de papel deseja entregar: "))
metal =  Number(prompt ("Digite quantos Kgs de metal deseja entregar: "))

vendaPlastico = ((plastico * 2) / 10)
vendaPapel = ((papel * 3) / 30)
vendaMetal = ((metal * 5) / 50)
vendaTotal = (vendaPlastico + vendaPapel + vendaMetal).toFixed(2)

alert(` O valor da venda do plastico é: ${vendaPlastico}\n O valor da venda do papel é: ${vendaPapel}\n O valor da venda do metal é: ${vendaMetal}\n O valor total é: ${vendaTotal}`)