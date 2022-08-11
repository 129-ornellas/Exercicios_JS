/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = 'asd'
var semana = ['','Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
var acesso = semana[entrada]

if (entrada == 0){
    console.log('Entrada inválida.')
    }

else if (entrada != semana[entrada]){
    console.log('Entrada inválida.')
    }
else{
    console.log(acesso)
}
// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada


// if (semana.includes(entrada)){
//     console.log(entrada)
// }


// var resultado = 'Domingo'

// console.log(resultado)
