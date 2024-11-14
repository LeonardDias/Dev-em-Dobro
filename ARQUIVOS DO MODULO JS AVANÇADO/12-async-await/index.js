// ASYNC e AWAIT
// Vamos continuar a utilizar os exemplos da aula passada.

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Passo 1 finalizado: Água foi fervida.");
            resolve()
        } else {
            console.log("É necessário colocar a chaleira com a água e ligar o fogão.");
            reject()
        }
    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log("Passo 2 finalizado: O café foi passado.");
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log("Passo 3 finalizado: Terminei de tomar o café.");
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log("Passo 4 finalizado: Terminei de lavar a xícara.");
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

// Aqui iremos criar a FUNCTION com ASYNC para podermos chamar o AWAIT
async function iniciarProcessoDeFazerCafe() {
    // Aqui vamos criar a variável que vai receber o RETURN da FUNCTION ferverAgua
    // Neste caso o AWAIT vai esperar o termino da FUNCTION ferverAgua para dar continuidade.
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    // Uma vez que a aguaFervida foi executada e deu tudo certo vamos ao próximo passo.
    const cafePassado = await passarOCafe(aguaFervida)
    // Agora segue a sequência
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    // E por fim utilizaremos um IF para finalizar o processo.
    if (xicaraLavada) console.log("Finalizado o ritual de tomar o café, bora trabalhar!!");
        
}
iniciarProcessoDeFazerCafe()
