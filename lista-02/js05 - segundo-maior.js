// Faça um programa que mostre o segundo maior nro da lista 

var numeros = [1, 3, 2, 4, 5];
numeros.sort();
numeros.pop();
var maior = Math.max.apply(null, numeros );
console.log(maior)

