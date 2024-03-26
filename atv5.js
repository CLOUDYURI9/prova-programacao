/*
Nome 1:Ana luiza de Assis
Nome 2:Arthur Henrique Pereira Martins
Nome 3:João Gabriel Sabino de Araujo
Nome 4:Yuri Dinato da Silva

5 -O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa.
Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura
(em metros). A tabela a seguir apresenta as faixas deste índice:
 __________________________________________
|====== IMC ======= |===== Avaliação ===== |
| Menor que 18,5    | Baixo peso           |
| De 18,5 a 24,99   | Normal               |
| De 25 a 29,99     | Sobrepeso            |
| Maior que 30      | Obesidade            |
|___________________|______________________|

(25 pontos)
*/
var teclado = require("prompt-sync")();
var peso = parseFloat(teclado("Digite seu peso:"));
var altura = parseFloat(teclado("Digite sua altura:"));
var pesot = peso / (altura * altura);
if (pesot < 18.5) {
    console.log("Seu IMC \u00E9: ".concat(pesot, ", sua avalia\u00E7\u00E3o \u00E9 baixo peso"));
}
else if (pesot >= 18.5 && pesot <= 24.99) {
    console.log("".concat(pesot, " normal"));
}
else if (pesot >= 25 && pesot <= 29.99) {
    console.log("".concat(pesot, " Sobrepeso"));
}
else if (pesot > 30) {
    console.log("".concat(pesot, " Obesidade"));
}
else {
    console.log("Algo deu errado!!");
}
