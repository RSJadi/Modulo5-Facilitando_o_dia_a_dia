const readline = require('readline-sync'); //Importando o readline-sync
const propriedades = []; // Array que vai receber as propriedades digitadas pelo usuário

while (true) {
    const propriedade = readline.question('Qual a propriedade CSS que voce deseja adicionar? ')
    if (propriedade.toLocaleLowerCase() != 'sair') { // enquato a propriedade  inserida e convertida  para letras minúsculas for diferente de sair
        propriedades.push(propriedade); // O método push vai "empurrar" o que foi inserido pelo usuário para dentro do Array que chamei de propriedades
    } else {
        break;
    }
}
propriedades.sort(); // O método sort() coloca as propriedades em ordem crescente
console.log(`As propriedades CSS adicionadas em ordem alfabetica, são: \n ${propriedades}.`);
