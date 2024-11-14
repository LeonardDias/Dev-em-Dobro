// ParÂmetro REST
// A sintaxe do parâmetro REST permite que uma função aceite um número indefinido de argumentos como uma array, fornecendo uma maneira de representar funções variáveis em JavaScript.
/*
Sintaxe
function (a, b, ...args) {
    
}
*/

// Essa é a forma comum de se fazer.
// Aqui iremos criar uma function, com dois parâmetros e imprimimos no console LOG.
function incentivarQuester(mensagem, ...nomesQuesters) {
    console.log(`${mensagem} ${nomesQuesters}.`);
}
// Aqui estamos chamando as funções e passando o valor dos parâmetros.
incentivarQuester("Parabéns por ter chegado ao módulo de JavaScript Avançado,", "Leonard", " João", " Joaquim")

