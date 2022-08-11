/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 * IMPORTANTE:
 * - Não usar bibliotecas, basta manipular a string de entrada de forma a embaralhá-la
 */

// Entrada
var entrada = "123456"
contador = 1
invertida = ''

for (var indice of entrada){
invertida += entrada[entrada.length - contador]
contador ++
}
console.log(invertida)
