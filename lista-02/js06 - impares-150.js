// Faça um programa que imprima na tela apenas os números ímpares entre 1 e 150. 

var lista = 150
impar = 0

// for (var i = 0; i > 10; i++)

while (impar < lista){
    impar ++
    if (impar % 2 != 0){
        console.log(impar)
        impar ++
    } 
    else{
        break
    }
}