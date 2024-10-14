/* ESTRUTURA NORMAL DE UMA FUNÇÃO:

function somar(numero1, numero2) {
  return numero1 + numero2;
}

let resultadoDaSoma = somar(12, 5);
console.log(resultadoDaSoma);

*/

// ESTRUTURA DE UMA FUNÇÃO ANÔNIMA:

// No caso dessa FUNÇÃO ANONIMA ela é declarada dentro da VARIÁVEL e não recebe um nome doferente do que vimos acima.

let resultadoDaSoma = function (numero1, numero2) {
  return numero1 + numero2;
};

console.log(resultadoDaSoma(12, 2));
