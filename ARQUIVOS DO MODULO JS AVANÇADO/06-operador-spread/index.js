// OPERADOR SPREAD
/*
// Aqui criamos uma ARRAY com 3 objetos.
const pessoas = ["Leonard", "Paulo", "Dias"]
// Aqui estamos vendo ela como um array comum.
console.log("SEM SPREAD");
console.log(pessoas);

// Aqui vamos colocar o SPREAD e ver como funciona.
console.log("COM SPREAD");
console.log(...pessoas);
*/


// CONCATENAR DOIS ARRAYS
/*
let pessoas1 = ["Leonard", "Paulo", "Dias"]
let pessoas2 = ["Pedro", "João", "Paulo"]
*/

// Forma antiga de concatenar dois ARRAYS
/*
pessoas1 = pessoas1.concat(pessoas2)
console.log("FORMA ANTIGA DE CONCATENAR O SPREAD");
console.log(pessoas1);
*/

// Forma atual de concatenar dois ARRAYS
/*
pessoas3 = [...pessoas1, ...pessoas2]
console.log("FORMA ATUAL DE CONCATENAR O SPREAD");
console.log(pessoas3);
*/

// CLONAR OBJETO
let pessoas1 = {nome: "Leonard", idade: 40}
let endereco = {rua: "Anastacia 70", numero: 32}

let objetoClonado = { ...pessoas1, ...endereco }
console.log(objetoClonado);

