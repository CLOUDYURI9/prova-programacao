/*
Nome 1:Ana Luiza de Assis
Nome 2:Arthur Henrique Pereira Martins
Nome 3:João Gabriel Sabino de Araujo
Nome 4:Yuri Dinato da Silva
Nome 5:-------

1- Faça um programa que peça um número inteiro e
determine se ele é par ou ímpar. (10 pontos)
*/
var teclado = require("prompt-sync")();
var dividendo = parseInt(teclado("Digite o n\u00FAmero inteiro:"));
var resto = 0;
resto = dividendo % 2;
if (resto == 0) {
    console.log("N\u00FAmero digitado ".concat(dividendo, " \u00E9 par!"));
}
else if (resto == 1) {
    console.log("N\u00FAmero digitado ".concat(dividendo, " \u00E9 \u00EDmpar!!"));
}
else {
    console.log("Algo deu errado!!");
}
