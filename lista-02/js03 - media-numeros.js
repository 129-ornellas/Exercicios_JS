//  Faça um programa que faça a média de todos os nros de uma lista 

var numeros = [1, 2, 3, 4, 5];
    total = 0

for ( var numero of numeros){
    total += numero
}

// Veja como pegar este valor com base na entrada
quantidadeDeNumeros = numeros.length
media = total / quantidadeDeNumeros

console.log(media)