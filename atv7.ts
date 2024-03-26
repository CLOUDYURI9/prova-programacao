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

const teclado= require(`prompt-sync`)();
let cont: number = 0;

do{
    let n1: number = parseFloat(teclado(`Digite o primeiro valor: `));
    let n2: number = parseFloat(teclado(`Digite o segundo valor: `));
    let soma = n1 + n2;
    console.log(`A soma dos dois número é ${soma}`);
    console.log(``);
    cont= parseInt(teclado(`Deseja continuar? || Digite 1- para sim / Digite 0- para não: `));
   
}while(cont == 1);

