// FUNÇÕES

// Quando falamos em funções no JavaScript, estamos em criar um escopo para executar um determinado bloco de código. Podemos dar qualquer nome e executar em qualquer parte.

// ESTRUTURA

/*
// DECLARAÇÃO DO BLOCO DA FUNÇÂO
funcão nomeDaFuncao (parametro1, parametro2, pode ter ou não) {
    <bloco de execução>
}

// CHAMANDO A FUNÇÃO
nomeDaFuncao ()

*/

function teste (teste = "Paulo conseguiu!!!") {
    console.log("Aqui estamos testando para ver se a função funciona!!! " + teste)
}

teste ()

// Vamos ver passando agora os parâmetros.

// Neste caso botei dois parâmetros e informei lá em baixo os dois que neste caso foram o 10 e o 15.

function calcular (numero1, numero2) {
    // console.log (numero1 + numero2)
    return numero1 + numero2 // aqui colocamos o return e podemos colocar entre () ou não
}

// calcular(10, 15) RESULTADO A SER MOSTRADO

// Podemos também colocar ela para RETORNAR os VALORES, neste caso utilizamos o RETURN.

let resultado = calcular(10, 15) // aqui estamos colocando em uma variável
console.log (resultado) // e aqui estamos mostrando o valor

resultado = calcular(resultado, 10) // aqui pegamos o resultado de 25 e chamamos a função e somamos mais 10
console.log(resultado)

// Agora vamos passar um valor para a função de TESTE criada mais acima e chamarmos ela e adicionei o PAULO CONSEGUIU.

// Se você não passar o parâmetro ele irá colocar UNDEFINED, para resolver isto basta deixar a chamada da função vazia () e lá no parâmetro da função colocar (teste = "coloque aqui o desejado")