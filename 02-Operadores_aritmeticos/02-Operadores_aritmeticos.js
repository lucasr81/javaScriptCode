/*
Operadores Aritimeticos
Autor: Lucas Rocha
Data:  31/05/2023
*/
let primeiroNumero = 20;
let segundoNumero = 2;

// Adição:                      +
// Subtração                    -
// Multiplicação                *
// Divisão                      /
// Exponenciação                **
// Resto da divisão             %


// const soma = primeiroNumero + segundoNumero;
// console.log(soma);

 console.log('Soma =', primeiroNumero + segundoNumero)
 console.log('Subtração =', primeiroNumero - segundoNumero)
 console.log('Multiplicação =', primeiroNumero * segundoNumero)
 console.log('Divisão =', primeiroNumero / segundoNumero)
 console.log('Exponenciação =', primeiroNumero ** segundoNumero)
 console.log('Resto da divisão =', primeiroNumero % segundoNumero)

//Precedência de operadores

/*A precedência de operadores determina a ordem em que os operadores são processados. 
Operadores com maior precedência são processados primeiro. */

console.log(3 + 7 * 3); // Aqui sera executado amultiplicação (7*3) depois sera somado com (3) da diretra para esquerda
console.log((3+7)*3)// Aqui sera feito a soma e depois a multiplicação
console.log((10 + 7 + 9) / 3);// tirando a media os valores ficam () e depois é dividido por 3

//Biblioteca Math

console.log(Math.PI); // valor de PI
console.log(Math.sqrt(16));
