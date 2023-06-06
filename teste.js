//Igualdade:        == (ou ===)
let num1 = '10';
let num2 = 8;
num1 = 80
console.log( num1 === num2)
console.clear();

//Desigualdade:     != (ou !==)
let nome1 = 'Milton';
let nome2 = 'Marcos';
console.log(nome1 !== nome2)
console.clear();

//Maior que:        >      
let numero1 = 100;
let numero2 = 50;
console.log('Número1 é maior que numero2?', numero1 > numero2);
//MAior ou igual:   >=
console.log('Número1 é maior ou igual ao numero2?', numero1 >= numero2);
//Menor que:        <      
let numeros1 = 10;
let numeros2 = 9.9;
console.log('Número1 é menor que numero2?', numeros1 < numeros2);         
//Menor ou igual:   <=
console.log('Número1 é menor ou igual ao numero2?', numeros1 <= numeros2);
console.clear();
// AND => &&
let idade = 20;
let tenhoCNH = true;
const possoDirigir = idade > 18 && tenhoCNH === true;
if(possoDirigir === true){
console.log('Parabens!!! voce atende os requisitos, voce pode dirigir');
}else{
    console.log('Voce não pode dirigir por não atender um ou mais requisitos exigidos');
}
//console.log(possoDirigir);

//Or => ||
idade = 10;
const votoFacutativo = idade < 18 || idade >= 70;
console.log(votoFacutativo);

//Not => !
const estouGostandoDoCurso = false
console.log(!estouGostandoDoCurso);