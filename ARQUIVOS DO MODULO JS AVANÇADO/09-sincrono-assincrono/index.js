// Síncrono e Assíncrono
// A explicação se encontra no NOTION

function colocarAguaPraFerver() {
    console.log("Colocar a água pra ferver.");
    setTimeout(() => {
        console.log("A água ferveu");
        passarOcafe()
    }, 5000);
}

function prepararPraPassarOCafe() {
    console.log("Pegar o pó de café.");
    console.log("Pegar o filtro de café.");
    console.log("Colocar o café no filtro.");
    console.log("Colocar o filtro em cima da xícara.");
}

function passarOcafe() {
    console.log("Passando o café.");
}

colocarAguaPraFerver()
prepararPraPassarOCafe()


