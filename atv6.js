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
console.clear();
var teclado = require("prompt-sync")();
var litrosE = parseFloat(teclado("Quantidade litros de etanol: "));
var litrosG = parseFloat(teclado("Quantidade litros de gasolina: "));
var precoGasolina = 5.58;
var precoEtanol = 3.42;
var totalE = 0;
var totalG = 0;
var descontoE = 0;
var descontoG = 0;
if (litrosE <= 20) {
    descontoE = (precoEtanol * litrosE) * 0.03;
    totalE = (precoEtanol * litrosE) - descontoE;
    console.log("O pre\u00E7o total do etanol \u00E9 R$".concat(totalE));
}
else if (litrosE > 20) {
    descontoE = (precoEtanol * litrosE) * 0.05;
    totalE = (precoEtanol * litrosE) - descontoE;
    console.log("O pre\u00E7o total do etanol \u00E9 R$".concat(totalE));
}
else {
}
if (litrosG <= 20) {
    descontoG = (precoGasolina * litrosG) * 0.04;
    totalG = (precoGasolina * litrosG) - descontoG;
    console.log("O pre\u00E7o total da gasolina \u00E9 R$".concat(totalG));
}
else if (litrosG > 20) {
    descontoG = (precoGasolina * litrosG) * 0.06;
    totalG = (precoGasolina * litrosG) - descontoG;
    console.log("O pre\u00E7o total da gasolina \u00E9 R$".concat(totalG));
}
else {
}
