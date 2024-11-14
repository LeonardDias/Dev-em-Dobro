//Quando chamamos o MAP nós transformamos o ARRAY em um ARRAY totalmente novo. Diferente do FILTER que utilizamos para filtrar, aqui criamos um novo.

// ARRAY de OBJETOS
let pessoas = [
    {nome: "Leonard", idade: 33},
    {nome: "Luiz", idade: 33},
    {nome: "Rafael", idade: 27}
]

// Criamos uma variável com ARRAY para receber essas dados e vamos pegar o ARRAY acima e criar um novo ARRAY apenas com os nomes.
/*
let nomeDasPessoas = []
for(let i = 0; i < pessoas.length; i++) {
    nomeDasPessoas.push(pessoas[i].nome)
}
console.log(nomeDasPessoas);
*/

// Agora vamos criar com o MAP
/*
let nomeDasPessoas = pessoas.map(function(pessoa) {
    return pessoa.nome + " tem " + pessoa.idade + " anos de idade"
})
console.log(nomeDasPessoas);
*/

// Simplificando com ARROW FUNCTION
let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem " + pessoa.idade + " anos de idade")
console.log(nomeDasPessoas);