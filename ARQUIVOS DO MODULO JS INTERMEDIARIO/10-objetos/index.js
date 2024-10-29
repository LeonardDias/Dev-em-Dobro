// OBJETOS NO JAVASCRIPT

// Em JavaScript, objetos são estruturas que armazenam dados na forma de pares chave-valor. Eles são usados para representar entidades do mundo real ou conceitos, agrupando propriedades (dados) e métodos (funções).

/*
ESTRUTURA

declaração nomeDaVariavel = {
    chave (propriedades): valor,
    chave (propriedades): valor
}
*/

// Aqui estamos começandso uma variável e instanciando ela. Neste caso utilizamos as CHAVES {} para começarmos a passar as características do tenis (neste caso).
// Atenção as características são chamadas de PROPRIEDADES.
let tenis = {
    cor: "Branco",
    tamanho: 42,
    emEstoque: true
}

// Aqui vamos mostrar como se comporta a impressão no navegador.

// Mostra todas as informações.
console.log(tenis);
console.table(tenis);

// Aqui vamos colocar imprimindo apenas um item.
console.log(tenis.cor);

// Adicionando nova propriedades.
tenis.valor = 200
console.log(tenis);



