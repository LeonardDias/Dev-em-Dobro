// THEN
// Mais explicações no NOTION.

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Começando o processo de ferver a água");
            resolve()
        } else {
            console.log("É necessário colocar a chaleira com a água e ligar o fogão, senão teu cafézinho não vai ficar pronto nunca");
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

// Aqui iremos criar uma nova FUNCTION para podermos mais a frente passarmos a informação ao THEN
let passarCafe = () => console.log("Passando o café");

// Aqui estamo colocando o THEN e a FUNCTION criada anteriormente
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log("Fazendo o café");
