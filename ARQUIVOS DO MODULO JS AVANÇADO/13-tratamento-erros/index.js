// TRATAMENTO DE ERROS
// Vamos continuar a utilizar os exemplos da aula passada.

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if (typeof chaleiraEstaNoFogao != "boolean") throw "Somente o tipo BOOLEANO é aceito!!!" 

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Passo 1 finalizado: Água foi fervida.");
            resolve()
        } else {
            const mensagemDeErro = "É necessário colocar a chaleira com a água e ligar o fogão.";
            reject(mensagemDeErro)
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

async function iniciarProcessoDeFazerCafe() {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
        if (xicaraLavada) console.log("Finalizado o ritual de tomar o café, bora trabalhar!!");
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Seu programa rodou indiferente das circunstâncias!!!");
    }
}
iniciarProcessoDeFazerCafe()
