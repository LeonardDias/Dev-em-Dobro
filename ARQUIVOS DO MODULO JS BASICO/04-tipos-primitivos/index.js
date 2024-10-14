// Tipo STRING Representa sequências de caracteres e é definido entre aspas simples ('') ou duplas ("").
let nome = "Paulo"
console.log(nome)

// Tipo NUMBER Representa valores numéricos, seja inteiros ou de ponto flutuante, podendo ser também números negativos.
let numero = 1234567890
console.log(numero)

// Tipo BOOLEAN Representa valores lógicos, que podem ser true (verdadeiro) ou false (falso).
let usuarioVerificado = confirm("Digite a validação")
// Aqui estamos colocando um CONFIRM, caso o usuário digite ok irá ser verificado, caso cancelar retornará usuário não verificado, no navegador.
if(usuarioVerificado){
    console.log("Usuário Verificado")
} else {
    console.log("Usuário não Verificado")
}

// Tipo NULL Representa a ausência de valor ou um valor nulo intencionalmente atribuído.
let pessoa = null
console.log(pessoa)

// Tipo UNDEFINED O undefined indica ausência de valor ou que a variável ainda não foi inicializada.
let indefinido = undefined
console.log(indefinido)




