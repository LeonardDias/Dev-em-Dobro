// FETCH
// O fetch é uma função nativa do JavaScript que permite enviar e receber dados de servidores de forma assíncrona. Ele retorna uma Promise, que representa uma requisição em andamento. Isso significa que você pode manipular a resposta quando ela estiver disponível, usando .then() ou async/await.

// 4 Aqui estamos criando o evento de click para o botão criado no HTML.
document.getElementById("tirar-carta").addEventListener("click", () => {
    tirarUmaCartaAleatoriaDoBaralho()
})


// 1º Primeiramente iremos criar uma FUNCTION e dentro dela criar uma variável que irá receber a URL da API. E como vamos apenas utilizar um baralho deixaremos o deck_count=1.
async function criarBaralhoEmbaralhado() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    // Aqui estamos criando uma variável para receber o fetch da url que criamos acima e com isso ele está retornando uma PROMISSE.
    const resposta = await fetch(url)
    // Aqui estamos criando uma variável que recebe a resposta.json, que também retorna uma PROMISE.
    // const json = await resposta.json()
    return await resposta.json()
}

//Colocamos um console.log acima e chamamos a função para ver que a PROMISE foi retornada e adicionamos ASYNC e AWAIT.
// criarBaralhoEmbaralhado()

// 3º Estamos criando uma FUNCTION para puxarmos a carta.
async function tirarUmaCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

// 2º Agora vamos criar a FUNCTION para puxar uma carta e adicionar a functioncriada anteriormente.
async function tirarUmaCartaAleatoriaDoBaralho() {
    // Aqui vamos criar uma variável para receber a FUNCTION e como a FUNCTION é um return de uma promessa vamos colocar o AWAIT e assim criada a função de tirar uma carta.
    const baralho = await criarBaralhoEmbaralhado()
    // Aqui estamos criando um AWAIT para tirar uma carta e com isso ele vai buscar na API os dados solicitados e isso pode levar um tempo se a API estiver carregada.    
    const carta = await tirarUmaCarta(baralho.deck_id)
    // Aqui estamos criando uma variável para adicionarmos a URL que será utiliza abaixo.
    const imagemCarta = (carta.cards[0].image);
    // Criamos uma IMG no HTML e atribuimos uma ID e agora vamos buscar ela.
    document.getElementById("carta").src = imagemCarta
}

tirarUmaCartaAleatoriaDoBaralho()