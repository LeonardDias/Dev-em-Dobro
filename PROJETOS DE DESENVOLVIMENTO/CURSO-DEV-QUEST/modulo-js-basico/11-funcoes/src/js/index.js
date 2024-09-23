/*
    function nomeDaFunção(parametros / ou não) {
        <bloco de execução>
    }

    nomeDaFunção() AQUI ESTAMOS INVOCANDO A FUNÇÂO PARA EXECUÇÃO.
*/

/*
function nomeDaFunção (parametro1, parametro2) {
        <bloco de execução>
}
    nomeDaFunção (parametro1, parametro2)
*/

// FUNCTION SEM PARAMETRO

/*
function incentivarQuester () {
    alert ("Muito bem, você chegou ao JS, continue assim!")
}

incentivarQuester ()
*/

// FUNCTION COM PARAMETRO

/*
function soma (numero1, numero2) {
    return numero1 + numero2
}

let resultadoDaSoma = soma (10, 3)
console.log (resultadoDaSoma)

resultadoDaSoma = soma (resultadoDaSoma, 10)
console.log(resultadoDaSoma)
*/

// VALORES PADRÕES PARA AS FUNÇÕES.

function incentivarQuester (nomeQuester = "Quester") {
    alert ("Muito bem " + nomeQuester + " , você chegou ao JS, continue assim!")
}

incentivarQuester ()
