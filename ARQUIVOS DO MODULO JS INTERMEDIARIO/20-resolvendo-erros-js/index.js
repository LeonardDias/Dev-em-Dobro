/*
let valorBoleto = 100;
//console.log(valorBolet); ERRO
console.log(valorBoleto);
*/

let inputTelefone = document.getElementById ("telefone");
inputTelefone.disabled= true;
function habilitarTelefone() {
    let inputTelefone = document.getElementById ("telefone");
    inputTelefone.disabled= false;
}