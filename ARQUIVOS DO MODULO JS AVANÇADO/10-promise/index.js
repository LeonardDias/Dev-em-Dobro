// PROMISE
// Explicações no NOTION.

/*
Aqui está o escopo inicial da PROMISE.
new Promise((resolve, reject) => {
    conteúdo da promise
})
*/

// Aqui criamos duas situações BOOLEANAS
let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

// Vamos criar uma FUNÇÃO para utilizar a PROMISE. E passar as variáveis como PARÂMETROS da FUNÇÃO.
// Aqui este caso os dois parâmetros tem que estár true para funcionar.
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Começando o processo de ferver a água.");
            resolve()
        } else {
            console.log("É necessario ligar o fogão e colocar a chaleira no fogão para ferver a água!");
            reject()
        }
    })
}

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log("Fazendo café!");

