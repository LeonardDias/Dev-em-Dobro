// TRABALHANDO COM ARRAYS

// Aqui estamos vendo como utilizar os LAÇOS em ARRAYS.

// Aqui estamos criando uma variável e adicionando um array.
let frutas = ["banana", "maça", "laranja", "pêra", "Goiaba", "Caqui"]

// Aqui não é necessário, apenas colocamos para mostrar a quantidade de espaços das frutas no ARRAY, neste caso 6 frutas
let frutasTamanho = frutas.length
console.log("Total de espaços das Frutas: " + frutasTamanho);


// Com o for estamos criando um laço para que toda vez que for adicionado uma fruta acima ela já seja impressa como resultado.
/*
for (let i = 0; i < frutasTamanho; i++) {
    console.log("Fruta: " + frutas[i]);
}
*/

// FOREACH

//Aqui estamos colocando a variavel fruta com o foreach e criando uma função anônima, na função estamos dando os parâmetros e colocando um bloco de código para a impressão.
// Neste caso o vamos colocar uma parâmetro para ver como fica.

/*

frutas.forEach(function(item, indice, array) {
    console.log("Fruta: " + frutas[indice]);
})

*/

// MÉTODOS DO ARRAY

// Aqui veremos alguns métodos que irão nos ajudar.

// PUSH: Adiciona elementos no final do ARRAY
// Note que ele não adicioona um espaço da FRUTA, apenas adiciona a MANGA.
frutas.push("Manga")
console.log(frutas);

// POP: Ele tirar o ultimo elemento do ARRAY.
// Note que ele não exclui um espaço da FRUTA, apenas retira a MANGA.
frutas.pop()
console.log(frutas);

// SHIFT: Remove o primeiro elemento do ARRAY
// Note que ele não exclui um espaço da FRUTA, apenas retira a BANANA.
frutas.shift()
console.log(frutas);

// UNSHIFT: Adiciona um elemento antes do primeiro dentro de uma array.
// Note que ele não adiciona um espaço da FRUTA, apenas insere um novo elemento no inicio.
frutas.unshift("kiwi")
console.log(frutas);

// INDEXOF: Procura o indece dentro de um array.
// Neste caso a posição da laranja é a 2.
let posicaoLaranja = frutas.indexOf ("laranja")
console.log(posicaoLaranja);

