/*
Nome 1: Ana Luiza de Assis
Nome 2: Arthur Henrique Pereira Martins
Nome 3: João Gabriel Sabino de Araújo
Nome 4: Yuri Dinato da Silva
Nome 5:

2 - Escreva um programa que receba três números inteiros
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/
var teclado = require("prompt-sync")();
console.log("* ------------------------------------- *");
console.log("* Digite tr\u00EAs n\u00FAmeros inteiro distintos *");
console.log("* ------------------------------------- *");
var n1 = parseInt(teclado("Insira o primeiro n\u00FAmero inteiro aqui:"));
var n2 = parseInt(teclado("Insira o segundo n\u00FAmero inteiro aqui:"));
var n3 = parseInt(teclado("Insira o terceiro n\u00FAmero inteiro aqui:"));
var maior = 0;
var meio = 0;
var menor = 0;
console.log("Esses foram os n\u00FAmeros escolhidos ".concat(n1, ", ").concat(n2, " e ").concat(n3));
if (n1 > n2 && n1 > n3) {
    maior = n1;
    if (n2 > n3) {
        meio = n2;
        menor = n3;
    }
    else if (n3 > n2) {
        meio = n3;
        menor = n2;
    }
    else {
        console.log("Algo deu errado!!");
    }
}
if (n2 > n1 && n2 > n3) {
    maior = n2;
    if (n1 > n3) {
        meio = n1;
        menor = n3;
    }
    else if (n3 > n1) {
        meio = n3;
        menor = n1;
    }
    else {
        console.log("Algo deu errado!!");
    }
}
if (n3 > n1 && n3 > n2) {
    maior = n3;
    if (n2 > n1) {
        meio = n2;
        menor = n1;
    }
    else if (n1 > n2) {
        meio = n1;
        menor = n2;
    }
    else {
        console.log("Algo deu errado!!");
    }
}
console.log("Ordem decrescente ".concat(maior, ", ").concat(meio, ", ").concat(menor));
