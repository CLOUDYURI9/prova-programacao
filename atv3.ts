/*
Nome 1:Ana luiza de Assis 
Nome 2:Arthur Henrique Pereira Martins
Nome 3:João Gabriel Sabino de Araujo
Nome 4:Yuri Dinato da Silva

3- Faça um programa que pergunte em que turno você estuda. 
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou 
"Boa Noite!" ou "Valor Inválido!", conforme o caso. (10 pontos)
*/

const teclado = require(`prompt-sync`)();

console.log(`Em qual turno você estuda??`);
let letra : string = (teclado(`Digite a letra "m" para matutino, "v" para vespertino e "n" para noturno:`));
console.clear();
let matutino : string = `m`;
let Vespertino : string = `v`;
let Noturno : string = `n`;


if(letra ==  matutino){ 
console.log(`Bom dia!!`);
}
else if(letra ==  Vespertino){
console.log(`Boa tarde!!`);
}
else if(letra ==  Noturno){
console.log(`Boa noite!!`);
}
else{
    console.log(`Valor inválido`);
}