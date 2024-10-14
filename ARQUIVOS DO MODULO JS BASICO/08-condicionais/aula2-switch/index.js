// SWITCH

// O switch no JavaScript é uma estrutura de controle que permite comparar uma variável ou expressão com diferentes casos (valores). É útil quando você tem várias condições para verificar e quer evitar o uso de vários if-else.

// ESTRUTURA

/*
switch(parâmetro){
    case valor1:
        <bloco de declaração>
    break
    case valor2: 
        <bloco de declaração>
    break
    default:
        <bloco de declaração>
    break
    }
*/

let nomeFilme = "Superman vs Batman"

switch(nomeFilme) {
    case "Vingadores":
        console.log("É o filme dos Vingadores")
    break
    case "Superman vs Batman":
        console.log("É o filme do Superman vs Batman")
    break
    case "Capitão América":
        console.log("É o filme do Capitão América")
    break
    default:
        console.log("É outro filme")
    break
}

// Vamos ver um outro exemplo de SWITCH.

let avaliacao = 9

switch(avaliacao) {
    case 1:
    case 2:
        console.log("Filme Ruim")
    break
    case 3:
    case 4:
        console.log("Filme Mediano")
    break
    case 5:
        console.log("Filme Bom")
    break
    default:
        console.log("Escolha a nota de 1 a 5.")
    break
}

