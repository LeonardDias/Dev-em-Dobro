// SWITCH

/*
switch(parametro) {
    case valor1:
        <bloco de declaração>
        break
    case valor2:
        <bloco de declaração>
        break
}
*/

/*
let nomeFilme = "Pokemon"

switch (nomeFilme) {
    case "Vingadores":
        console.log("É o filme dos Vingadores")
        break
    case "Batman vs Superman":
        console.log("É o filme do Batman vs Superman")
        break
    case "Senhor dos Anéis":
        console.log("É o filme dos Senhor dos Anéis")
        break
    default:
        console.log("É outro filme, e filme escolhido foi: ")
        console.log(nomeFilme)
        break
}
*/

// MULTI CASOS usando o SWITCH

let avaliacao = 2

switch(avaliacao) {
    case 1:
    case 2:
        console.log("Filme ruim!")
        break
    case 3:
    case 4:
        console.log("Filme mediano!")
        break
    case 5:
        console.log("Filme excelente!")
        break
    default:
        console.log("Nota inválida")
        break
}