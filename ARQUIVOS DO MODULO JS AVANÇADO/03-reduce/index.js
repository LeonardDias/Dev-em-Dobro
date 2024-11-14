// O método reduce no JavaScript é usado para reduzir um array a um único valor aplicando uma função acumuladora. Esse método percorre o array, executa uma função de "redução" em cada elemento e armazena o resultado dessa função em um acumulador, que é retornado no final.
// ARRAY de OBJETOS
let ordens = [
    {cliente: "Leonard", tipo: "compra", quantidade: 56, ativo: "NFLX34"},
    {cliente: "Luiz", tipo: "compra", quantidade: 76, ativo: "AAPL34"},
    {cliente: "Rafael", tipo: "venda", quantidade: 21, ativo: "GOGL34"}
]

// Aqui iremos colocar a soma da quantidades das ordens.
/*
let quantidadeDeOrdens = 0
for (let i = 0; i < ordens.length; i++) {
    quantidadeDeOrdens += ordens[i].quantidade
}
console.log(quantidadeDeOrdens);
*/

// Aqui vamos utilizar o REDUCE para ver como é mais simples.
/*
let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem) {
    console.log("Ordem", somaOrdens, ordem);
    return somaOrdens + ordem.quantidade
}, 0)
console.log(quantidadeDeOrdens);
*/

// Vamos colocar com ARROW FUNCTION.
let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)
console.log(quantidadeDeOrdens);
