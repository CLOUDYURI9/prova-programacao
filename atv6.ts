/*
Nome 1:Ana Luiza de Assis
Nome 2:Arthur Henrique Pereira Martins
Nome 3:João Gabriel Sabino de Araujo
Nome 4:Yuri Dinato da Silva
Nome 5:-------

6- Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    Álcool: até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro
    Gasolina:
    até 20 litros, desconto de 4% por litro
    acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos, 
o tipo de combustível (codificado da seguinte forma: E-etanol, G-gasolina), 
calcule e imprima o valor a ser pago pelo cliente sabendo-se que 
o preço do litro da gasolina é R$ 5,58 o preço do litro do 
etanol é R$ 3,42.

(25 pontos)
*/
const teclado= require (`prompt-sync`)();

let tipo: number= parseInt(teclado(`Digite 1 para etanol || 0 para gasolina:`));
let litros: number= parseFloat(teclado(`Quantidade litros de combustível:`));
const precoGasolina: number = 5.58;
const precoEtanol: number = 3.42;
let total:number = 0;
let desconto: number = 0;

if(tipo == 1){
    if(litros <= 20){
    desconto= (precoEtanol*litros)* 0.03;
    total = (precoEtanol*litros) - desconto;
    console.log(`O preço total do etanol é R$${total}`); 
    }
else if(litros > 20){
    desconto= (precoEtanol*litros)* 0.05;
    total= (precoEtanol*litros) - desconto;
    console.log(`O preço total do etanol é R$${total}`);
}
else{}
}

if(tipo == 0){
    if(litros <= 20){
    desconto= (precoGasolina*litros)* 0.04;
    total = (precoGasolina*litros) - desconto;
    console.log(`O preço total da gasolina é R$${total}`); 
    }
else if(litros > 20){
    desconto= (precoGasolina*litros)* 0.06;
    total= (precoGasolina*litros) - desconto;
    console.log(`O preço total da gasolina é R$${total}`);
}
else{}
}










