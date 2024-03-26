/*
Nome 1:Ana Luiza de Assis
Nome 2:Arthur Henrique Pereira Martins
Nome 3:João Gabriel Sabino de Araujo
Nome 4:Yuri Dinato da Silva

1- Faça um programa que peça um número inteiro e 
determine se ele é par ou ímpar. (10 pontos)
*/
const teclado = require(`prompt-sync`)();

let dividendo: number =parseInt(teclado(`Digite o número inteiro:`));
let resto: number =0;

resto = dividendo % 2;
if (resto ==0){
     console.log(`O número digitado ${dividendo} é par!`);
}
else if (resto ==1){
    console.log(`O número digitado ${dividendo} é ímpar!!`);
}
else{
    console.log(`Algo deu errado!!`);
}