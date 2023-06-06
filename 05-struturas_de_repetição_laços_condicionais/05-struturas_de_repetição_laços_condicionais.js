
/* 
Para este programa é necessario instalar e importar a biblioteca para ler dados do usuário
comando => npm install readline-sync
*/
const input = require('readline-sync');//Importando a biblioteca
const numero_sorteado = 5;
let numero = Number(input.question('Qual numero voce escolhe?'));// lendo os dados do usuário
console.log(numero, typeof numero);

/* Laço é o meio mais facil de executar uma instrução varias vezes  */
while(numero !== numero_sorteado){
    console.log('Voce errou, tente novamente...')
    numero = Number(input.question('Qual numero voce escolhe?'));
}
console.log('voce acertou, parabens!!!')
