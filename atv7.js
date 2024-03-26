/*
Nome 1:Ana Luiza de Assis
Nome 2:Arthur Henrique Pereira Martins
Nome 3:Joâo Gabriel Sabino de Araújo
Nome 4:Yuri Dinato da Silva

7- Faça um aplicativo que ao pedir dois números efetue a soma,
   e pergunte se ele quer continuar calculando, caso sim volte
   a perguntar os números a ser somados, caso não o aplicativo
   é finalizado.  (10 pontos)
*/
var teclado = require("prompt-sync")();
var cont = 0;
do {
    var n1 = parseFloat(teclado("Digite o primeiro valor: "));
    var n2 = parseFloat(teclado("Digite o segundo valor: "));
    var soma = n1 + n2;
    console.log("A soma dos dois n\u00FAmero \u00E9 ".concat(soma));
    console.log("");
    cont = parseInt(teclado("Deseja continuar? || Digite 1- para sim / Digite 0- para n\u00E3o: "));
} while (cont == 1);
