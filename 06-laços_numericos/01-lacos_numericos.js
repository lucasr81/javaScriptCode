// >> Laços numericos for
//Repetição controlada
const input = require("readline-sync")

/* O problema: Tirar a média das notas do aluno. aqui abaixo temos um exemplo decomo seria uma forma 
   de resolver o problema. Essa não é a forma mais recomendada, pois repete muitas 
   linhas de código . Usaremos a estrutura 'for' para isso em outro exmplo.
 */
// const nota1 = Number(input.question('Informa sua nota 1 '))//Lendo os dados do usuario
// const nota2 = Number(input.question('Informa sua nota 2 '))
// const nota3 = Number(input.question('Informa sua nota 3 '))

// let media = (nota1, nota2, nota3) / 3// Tirando a média das notas
// console.clear();

// Acumuador
/*Para resolver o problema de uma forma mais pratica, abordaremos o conceito do acumulador
O acumulador é uma variavel que literalmente vai acumulando, por exempo 
'let numero = 0
     numero = numero + 10
Usarei ou tro exemplos abaixo:
 */
let acumulador = 0;
acumulador = acumulador + 10;//Podemos usar acumulador += 10, ou -= par asubtrair
acumulador = acumulador + 2; // outra forma poeria ser acumulador++
console.log(acumulador);
console.clear();
// Estutrua for

//Exemmplo 1
for(let i = 0; i < 10; i++){
console.log('repeticao', i)
}

//Exemmplo 2
for(let i = 10; i < 12; i++){
    console.log('repeticao', i)
    }

    //Exemmplo 2
for(let i = 12; i < 8; i++){
    console.log('repeticao', i)
    }
    console.clear();
    //Resolvendo o problema inicial
    let nota;
    let soma = 0;
    for(let i = 1; i <= 3; i++){
        nota = Number(input.question(`Iforme a nota ${i} do aluno `))
        soma = soma + nota;

    }
    console.log(`A media das notas do aluno é ${soma/3}`)