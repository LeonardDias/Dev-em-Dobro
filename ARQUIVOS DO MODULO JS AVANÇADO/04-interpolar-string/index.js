// INTERPOLANDO STRINGS
// As template strings em JavaScript são uma maneira prática de criar strings mais dinâmicas e legíveis, especialmente quando você precisa inserir variáveis e expressões dentro de uma string. Elas são definidas com crases (`), e permitem interpolação de variáveis e expressões usando a sintaxe ${}.

// Criando a variável e passando os parâmetros e fazendo uma ARROW FUNCTION
const imprimirInformacoesPessoas = (primeiroNome,ultimoNome, idade) => {
    // Retornando os valores dos parâmetros.
    return "Primeiro Nome: " + primeiroNome + ", Ultimo Nome: " + ultimoNome + ", Idade: " + idade + " anos.";
}
// Imprimindo os valores e atribuindo os mesmos aos parâmetros.
console.log(imprimirInformacoesPessoas ("Leonard", "Dias", 40));

// Agora vamos criar com a INTERPOLAÇÃO de STRINGS o mesmo exemplo acima e veremos como fica.
const imprimirInformacoesPessoasInterpolacao = (primeiroNome,ultimoNome, idade) => {
    // Aqui utilizando as CRASES vai ficar desta forma.
    return `Primeiro Nome: ${primeiroNome}, Ultimo Nome: ${ultimoNome}, Idade: ${idade} anos.`
}
// Imprimindo os valores e atribuindo os mesmos aos parâmetros.
console.log(imprimirInformacoesPessoasInterpolacao ("Leonard", "Dias", 40));

// Um outro exemplo é chamando o mesmo pela FUNCTION e passando os parâmetros dentro dela e concatenando ainda mais, vamos dar uma olhada.
console.log(`${imprimirInformacoesPessoas("Leonard", "Dias", 40)}, este é o terceiro exemplo`);

// Vamos colocar uma operação aritmética para averiguarmos.
console.log(`A Soma de 10 + 20 é: ${10 + 20}`);
