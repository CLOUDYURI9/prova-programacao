/*
Nome 1:Ana Luiza de Assis 
Nome 2:Arthur Henrique Pereira Martins
Nome 3:João Gabriel sabino de Araújo
Nome 4:Yuri Dinato da Silva
Nome 5:

4 - Escreva um programa que leia as medidas dos lados de um triângulo e 
escreva se ele é Equilátero, isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.

(10 pontos)
*/

const teclado= require(`prompt-sync`)();

let medida1: number= parseFloat(teclado(`Digite o primeiro lado: `));
let medida2: number= parseFloat(teclado(`Digite o segundo lado: `));
let medida3: number= parseFloat(teclado(`Digite o terceiro lado: `));

if( medida1 == medida2 && medida1 == medida3){
    console.log(`O triângulo é equilátero!!`);
}
else if( medida1== medida2 || medida1 == medida3 || medida2 == medida3){
    console.log(`O triângulo é isóscele!!`);
}
else if(medida1 != medida2 || medida1 != medida3){
    console.log(`O triângulo é escaleno!!`);
}
else{
    console.log(`Algo deu errado!!`);
}
