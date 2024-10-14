// Estruturas de Repetições 2

//O WHILE (ENQUANTO) em JavaScript é outra estrutura de controle de fluxo usada para repetir um bloco de código enquanto uma condição especificada for verdadeira. Aqui está a anatomia básica do while de forma simplificada.

// Estrutura

/*
while (condição) {
    código a ser repetido
}
*/

let a = 1
let b = 15

// Aqui vamos criar a situação que enquanto a menor que b faça!
/*
while (a <= b){
    console.log("Incrementando a Variável a " + a)
    a++;
}
*/

// O do-while em JavaScript é uma estrutura de controle de fluxo semelhante ao while, mas com uma diferença crucial: o bloco de código é executado pelo menos uma vez, mesmo que a condição seja falsa desde o início. Aqui está a anatomia básica do do-while de forma simplificada.

// Estrutura

/*
do {
  // código a ser repetido
} while (condição);
*/

// Aqui vamos criar a mesma situação do exmeplo do while, mas utilizando o do while.

do {
    console.log(a)
    a++;
} while (a <= b)
