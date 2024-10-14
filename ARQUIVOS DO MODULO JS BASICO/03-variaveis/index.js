// Variável comum e pode ser alterada futuramente dentro do sistema, pode ser chamada a qualquer hora dentro do sistema.
var pessoa = "Paulo Leonard"
var nome = "Rafael"

{
// Variável comum porém não pode ser alterada no sistema depois de declarada, variável do tipo local.
const emailPessoa = "pauloleonard@ig.com"

// Variável comum, porém ela é utilizada dentro do escopo de bloco e são variáveis do tipo local, ou seja não pode ser chamada em qualquer parte do sistema.
let telefonePessoa = "21995863392"
console.log(emailPessoa)
console.log(telefonePessoa)
}
// aqui no console.log irá dar erro pois a variável foi declarada como CONST
// emailPessoa = "pauloleonard@bol.com"

// aqui a variável pessoa está recebendo outro nome e no console.log muda
//pessoa = "Silva Dias"

console.log(pessoa)
console.log(nome)

