function calcularFatorial (numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        console.log(`O valor de i é: ${i}`);
        resultado *= i;
        console.log(`O valor de resultado é: ${resultado}`);
        
    }

    return resultado;
}

function imprimirFatorial (numero) {
    if (numero < 0){
        console.log("Não é possível calcular o fatorial de um número negativo.");
        
    } else {
        const fatorial = calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é: ${fatorial}.`);
    }
}

const numero = 5;
imprimirFatorial(numero);


