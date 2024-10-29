// SLICE
// Função: O método slice() é usado para extrair uma parte de um array, retornando um novo array com os elementos selecionados, sem modificar o array original.

let frutas = ["Banana", "Maça", "Laranja", "Uva"]
/*
console.log("SLICE");

// Criamos a variável ARRAY e depois atribuimos o SLICE a ela.
let frutasExtraidas = frutas.slice(1,3)

// Neste caso ele extrai o que está entre as posições 0 e 3, que neste caso é a MACÃ e a LARANKA
console.log(frutasExtraidas);

// Ele não altera o ARRAY original
console.log(frutas);

// SPLICE
//Função: O método splice() é usado para alterar o conteúdo de um array, removendo ou adicionando elementos em uma posição específica. Ele modifica o array original e pode retornar os elementos removidos.
console.log("SPLICE");

// Aqui estamos extraindo as posições 1 e 2 e modificando o array
let frutasExtraidas2 = frutas.splice(1,2)
console.log(frutasExtraidas2);

// Veja como modificamos o array original, sobrando apenas banana e uva
console.log(frutas);

*/

// Adicionando e removendo elementos ao mesmo tempo.
let removeEAdiciona = frutas.splice(1,2, "Goiaba", "Abacaxi", "Pêra")
console.log(frutas);
// Aqui vemos as frutas removidas.
console.log(removeEAdiciona);







