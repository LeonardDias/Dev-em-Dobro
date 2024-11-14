// Desestruturação de OBJETOS e ARRAYS
// A desestruturação nos permite retirar variáveis de OBJETOS e ARRAYS.

// Criamos a variável PESSOA e damos alguns objetos a ela. Abaixo criamos outras variáveis e puxamos os objetos da variável pessoa, atribuindo a ela.
let pessoa = {nome: "Leonard", sobrenome: "Dias", idade: 40}
/* Aqui está comentado para não dar erro no exemplo com DESESTRUTURAÇÃO
let nome = pessoa.nome
let idade = pessoa.idade
*/
// Imprimindo os objetos que foram conlocados dentro de uma variável.
/*
console.log(`O nome é: ${nome}`);
console.log(`A idade é: ${idade}`);
*/
// Agora vamos ver a desestruturação para resumir a forma acima.
// Aqui estamos criando a variável com LET e abrindo e fechando chaves {tudo que estiver aqui são as novas variáveis e os itens dos objetos} e no final recebendo pessoa.
let {nome, sobrenome: sobreNomeDaPessoa, idade} = pessoa
console.log(`O nome é: ${nome}`);
console.log(`A idade é: ${idade} anos.`);
console.log(sobreNomeDaPessoa);

// Agora vamos ver a desestruturação de um ARRAY.
// Vamos criar um array simples
const numeros = [1, 2, 3];
// Diferente do objeto que é DESESTRUTURADO com CHAVES o do ARRAY é DESESTRUTURADO com COLCHETES
const [ um, dois, tres] = numeros
console.log(`O número é: ${um}`);
console.log(`O número é: ${dois}`);
console.log(tres);


