// ARRAY MULTIDIMENSIONAL

//Arrays multidimensionais em JavaScript são arrays que contêm outros arrays como elementos, permitindo a criação de uma estrutura de dados em múltiplas dimensões. Eles são úteis para representar matrizes, tabelas e outros dados estruturados de forma hierárquica.

let filmes = [
    ["Vingadores", 4.5, true, ["Robert", "Chris", "Scarlet", "Mark"]],
    ["Mulher-Maravilha", 4.7, true], 
    ["X-MEN", 4.0, false]
]
// Aqui estamos vendo a impressão do ARRAY completo, e utilizamos o CONSOLE.TABLE para dar maior charme na visualização.
console.table(filmes);

// Vamos ver agora algumas visualizações alternadas.
console.table(filmes[2])

// Vamos ver apenas agora alguns itens. NOTE que apenas ira aparecer o TRUE
console.table(filmes[1][2])

// Visualizar ARRAY dentro de ARRAY
console.table(filmes[0][3][2])