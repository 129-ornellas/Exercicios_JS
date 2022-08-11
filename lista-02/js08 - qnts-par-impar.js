// percorra uma lista de nros e retorne qtos numeros pares/impares


var numeros = [1,2,3,4,5,6,7,8,9,10]
    par = 0
    impar = 0

for (var numero of numeros){
    if (numero %2 == 0){
        par ++
    } 
    else{
        impar ++
    }
} 
console.log(`${par} números pares e ${impar} números ímpares`)
