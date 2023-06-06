// > Coerção (conversão) de tipos

// 01 - Corção explicita (Manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero); // Aqui estou convertendo um numero em String
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

const texto = '2222.022';
const textoEmFormatoDenumero = Number(texto); // Use sempre number
console.log(textoEmFormatoDenumero, typeof textoEmFormatoDenumero);


console.log(parseFloat('2222.222'));
console.log(parseInt('2222.222'));

console.log(Boolean(1))// valor 1(um) true, valor 0 (zero) false

console.clear();

//02 -Coerção implicita (Automatica)

console.log(10 + '1'); //Aqui os valores serão concatenados porque não foram feitos as conversoes de tipos

console.log(20 - '5');// nesse caso o jabaScrip entende que é para subtrair, assim como em(- | + | /)

/* Nesse caso ele retornara NaN. A propriedade global NaN é um valor especial que significa Not-A-Number (não é um núm*/
console.log(10 - 'xyz');
console.clear();
//Outros Exemplos

//Qual sera a saida desse codigo?
let n = 1 + 'i';
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + '5');

console.log('5' + 2 + 3 + 4);

console.log('10' - '4' - '3' - 2 + '5');
