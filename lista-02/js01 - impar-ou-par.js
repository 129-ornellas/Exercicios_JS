// Faça um programa que percorra uma lista e inf. se o numero é impar ou par

var numeros = [1,2,3,4,5,6,7,8,9,10]

for (var numero of numeros){
    if (numero %2 == 0){
        console.log('Par')

    } 
    else{
        console.log("Impar")
    }
} 