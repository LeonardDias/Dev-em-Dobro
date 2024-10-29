// Vamos ver como utilizar ARRAYS e OBJETOS em conjuntos.
// Aqui não vamos detalhar o que são cada um, tem aulas deles separadas veja se for necessário!!!
// Vamos criar um OBJETOS de JOGOS para implementar os ARRAYS.

/*
let jogo1 = {nome: "HALO"}
let jogo2 = {nome: "Fallout"}
let jogo3 = {nome: "FIFA 2025"}
let jogo4 = {nome: "Final Fantasy 7"}
let jogo5 = {nome: "God of War"}
let jogo6 = {nome: "PES 2025"}
let jogo7 = {nome: "ZELDA BoW"}
let jogo8 = {nome: "Pokemon Sword"}
let jogo9 = {nome: "Metroid Dread"}
let jogo10 = {nome: "The Witcher 3"}


// OBJETO / ARRAY
// Criando algumas informações sobre Video Games e com JOGOS em ARRAY
let videoGame = {
    nome: "Xbox",
    valor: 3000,
    jogos: [jogo1, jogo2, jogo3]
}

let videoGame2 = {
    nome: "Playstation",
    valor: 5000,
    jogos: [jogo4, jogo5, jogo6]
}

let videoGame3 = {
    nome: "Nintendo Switch",
    valor: 2000,
    jogos: [
                {nome: "Pokemon Sword"}, 
                {nome: "Metroid Dread"}, 
                {nome: "The Witcher 3"} 
            ]
}

let consoles = [videoGame, videoGame2, videoGame3]

// Adicionando com o PUSH um objeto no videoGame PLAYSTATION
videoGame2.jogos.push(jogo10)

// Exibindo as tabelas
console.table(consoles)
*/

// Outra forma de se utilizar um objeto dentro de outro objeto.
// Neste caso ele vai ver o ultimo pedido do cliente
let cliente = {
    nome: "Leonard",
    ultimoPedido: {
        nome: "Xbox",
        valor: 3000,
        jogos: [    
                {nome1: "FIFA 2025"},
                {nome2: "HALO INFINITY"},
                {nome3: "F1 2025"}
                ]
    }
}

// Vamos vizualizar como seria esse pedido apenas o jogo 2.
console.log(cliente.ultimoPedido.jogos[1].nome2);




