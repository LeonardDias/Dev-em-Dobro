// ESCOPO GLOBAL
// NESTE CASO ESTAMOS CRIANDO UM VARIÁVEL DE ESCOPO GLOBAL, 
// POIS ELA PODERÁ SER ACESSADA EM QUALQUER PARTE DO CÓDIGO.
/*
const mensagem = 'Olá'
console.log(mensagem)
*/

console.log(url)

// ESCOPO DE BLOCO
// JÁ NESTE CASO ESTAMOS CRIANDO UMA VARIÁVEL DE ESCOPO DE BLOCO,
// OU SEJA ELA SÓ PODERÁ SER USADA E ACESSADA NESTE BLOCO DE CÓDIGO.
/*
if (true) {
    const mensagem = 'Olá'
    console.log (mensagem)
}
console.log (mensagem)
*/

// ESCOPO DE CÓDIGOS AUTÔNOMOS
// ESTE CASO É PARECIDO COM ESCOPO DE BLOCO.
// APENAS SE ATENTE A DECLARAÇÃO DA VAR POIS ESSAS TEM REGRAS ESPECÍFICAS 
/*
{
    var mensagem = 'Olá'
    console.log (mensagem)
}
console.log (mensagem)
*/

// ESCOPO DE FUNÇÃO
// UMA FUNÇÃO DE JS DEFINE O ESCOPO PARA VARIÁVEIS CRIADAS COM LET, CONST E VAR
/*
function falar () {
    var mensagem = 'Olá Mundo!'
    console.log (mensagem)
    function falarOutraCoisa () {

    }

    falarOutraCoisa ()
    console.log (falarOutraCoisa)
}

falar ()
//console.log (mensagem)
console.log (falarOutraCoisa)
*/

