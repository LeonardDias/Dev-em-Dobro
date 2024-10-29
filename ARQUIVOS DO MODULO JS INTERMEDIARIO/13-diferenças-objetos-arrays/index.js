// Vamos ver as diferenças entre ARRAYS e OBJETOS
// Aqui não vamos detalhar o que são cada um, tem aulas deles separadas veja se for necessário!!!

// OBJETO
// Criando algumas informações sobre Video Games
let videoGame = {
    nome: "Xbox",
    valor: 3000
}

let videoGame2 = {
    nome: "Playstation",
    valor: 5000
}

let videoGame3 = {
    nome: "Nintendo Switch",
    valor: 2000
}

// ARRAYS
// Adicionando os OBJETOS no ARRAY
let consoles = [videoGame, videoGame2, videoGame3]

// Exibindo em tabelas os consoles
console.log("Exibindo a tabela com todos os objetos");
console.table(consoles)

// Exibindo apenas um vídeo game
console.log("Exibindo apenas um objeto dentro do ARRAY");
console.log(consoles[2]);

//Exibindo apenas um dado do OBJETO dentro da ARRAY
console.log("Exibindo apenas um dado do OBJETO dentro da ARRAY");
console.log(consoles[0].nome);


