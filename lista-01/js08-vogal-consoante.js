/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = 'c'
entrada.toUpperCase
vogal = ['a' , 'e', 'i', 'o', 'u']
// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (vogal.includes(entrada)){
    var resultado = 'vogal'
}
else {
    var resultado = 'consoante'
}
console.log(resultado)
