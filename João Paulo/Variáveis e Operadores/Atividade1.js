//1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

let nome, idade, endereco, cidade, estado;

nome = prompt ("Digite o seu nome: ")
idade = prompt ("Digite a sua idade: ")
cidade = prompt ("Digite a sua cidade: ")
estado = prompt ("Digite o seu estado: ")
endereco = prompt ("Digite o seu endereço: ")

alert (` Cliente ${nome}.\n Com ${idade} anos de idade.\n Mora em ${cidade} ${estado}.\n Reside no endereço ${endereco}`)