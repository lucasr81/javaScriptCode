//Operadores booleans

//Igualdade:        == (ou ===)

//Desigualdade:     != (ou !==)

//Maior que:        >      

//MAior ou igual:   >=

//Maior que:        <      
         
//MAior ou igual:   <=

const numero = 10;
console.log(numero == 20);
console.log(numero != 20);
console.log(numero > 20);
console.log(numero >= 20);
console.log(numero < 20);
console.log(numero <= 20);

/*
O sinal de igual duplo (==)  compara conteudo
e os o sinal triplo (===) compara tipos
*/
console.log(numero == 10);
console.log(numero === '10');// É recomendavel que se usa (===) para evitar bugs
console.clear();

/*
O sinal de difrente e igual (!=)  compara conteudo
e os o sinal de diferente e igual duplo(!==) compara tipos
*/
console.log(10 != 10);
console.log(10 !== '10');//Recomenda que use o sinal de diferente e igual duplo para evitar bugs
console.clear();
//Conjunções lógicas:

// AND => &&
let idade = 26;
let tenhoCnh = true;
const possoDirigir = idade > 18 && tenhoCnh === true;
console.log(possoDirigir);

//Or => ||
idade = 10;
const votoFacutativo = idade < 18 || idade >= 70;
console.log(votoFacutativo);
// Not => !
let estouGostandoDoCurso = false;
console.log(!estouGostandoDoCurso)

