// CONDICIONAIS IF (SE)

// Condicionais é basicamente um funil de escolhas e eles vão averiguar se o código vai ser direcionado por um determinado fluxo ou outro, baseado em uma expressão de lógica.

// Vamos criar uma variável e depois testar o IF.

// podemos também utilizar o ELSE IF para dar mais condições e ser mais específico.

let nomeFilme = "Capitão América"

if(nomeFilme === "Vingadores"){
    console.log("É o filme dos Vingadores")
} else if(nomeFilme === "Batman vs Superman") {
    console.log("É o filme do Batman vs Supermam")
} else if (nomeFilme === "Capitão América") {
    console.log("É o filme do Capitão América")
} else {
    console.log("É outro filme")
}

// Operador Ternário

// É uma forma simplificada de escrever o código acima. Neste caso é sem o else if (veremos mais para frente).

// ESTRUTURA

/*

condição ? console.log("TRUE") : console.log("FALSE")

*/

false ? console.log("Condição Verdadeira") : console.log("Condição Falsa")

nomeFilme === "Vingadores" ? console.log("É o filme dos Vingadores") :
console.log("É outro filme") 
