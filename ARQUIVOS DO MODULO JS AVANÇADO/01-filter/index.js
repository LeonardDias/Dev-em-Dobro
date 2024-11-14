//O FILTER ele é uma FUNCTION que aceita outra FUNCTION como paramêtro e essa FUNCTION é utilizada para filtrar elementos de um ARRAY.

// ARRAY de OBJETOS
let pessoas = [
    {nome: "Leonard", idade: 33},
    {nome: "Luiz", idade: 33},
    {nome: "Rafael", idade: 27}
]

/*
// Criamos uma variável com ARRAY para receber essas dados
let pessoasComIdadeDe33Anos = []
// Criamos um FOR para que possa ser percorrido o PESSOAS e ver qual IDADE dele é 33.
for(let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].idade === 33) {
        pessoasComIdadeDe33Anos.push(pessoas[i])
    }
}
// Aqui estamos vendo quantas pessoas tem 33 anos dentro do ARRAY.
console.log(pessoasComIdadeDe33Anos);
*/
/*
// Vamos utilizar agora o FILTER para ver como fica.
// O próprio FILTER vai fazer a busca no ARRAY sem a necessidade de um FOR.
let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa) {
    return pessoa.idade === 33
})
console.log(pessoasComIdadeDe33Anos);
*/

// Aqui iremos ver como fica com ARROW FUNCTION
let pessoasComIdadeDe33Anos = pessoas.filter(pessoa => pessoa.idade === 33)
console.log(pessoasComIdadeDe33Anos);