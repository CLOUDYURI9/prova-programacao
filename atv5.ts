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
const teclado = require (`prompt-sync`)();

let peso : number =parseFloat(teclado(`Digite seu peso:`));
let altura : number =parseFloat(teclado(`Digite sua altura:`));
let pesot = peso / (altura*altura);

if (pesot < 18.5 ){
    console.log(`Seu IMC é: ${pesot}, sua avaliação é "baixo peso"`);
}
else if (pesot >= 18.5 && pesot <= 24.99){
    console.log(`Seu IMC é: ${pesot}, sua avaliação é "normal"`);
}
else if (pesot >= 25 && pesot <= 29.99){
    console.log(`Seu IMC é: ${pesot}, sua avaliação é "sobrepeso"`);
}
else if (pesot > 30){
    console.log(`Seu IMC é: ${pesot}, sua avaliação é "obesidade"`);
}
else{
    console.log(`Algo deu errado!!`);
}




    
