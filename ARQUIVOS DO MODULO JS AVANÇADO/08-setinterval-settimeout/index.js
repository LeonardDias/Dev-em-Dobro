// SetInterval e SetTimeout

//SETTIMEOUT
// A função setTimeout executa um código ou função uma vez depois de um tempo especificado (em milissegundos).
// Aqui estamos criando uma function que irá chamar a mensagem depois de 3 segundos.
/*
setTimeout(function(){
    alert("Olá Mundo depois de 3 segundo!!!!")
}, 3000)
*/

//SETINTERVAL
// SetInterval executa uma função repetidamente, em intervalos regulares, até que seja cancelada. É ideal para executar tarefas contínuas, como contadores ou animações.
/*
setInterval(() => {
    console.log("Executando a cada 3 segundos!!!");
}, 2000);
*/

//Ambos o SETTIMEOUT e o SETINTERVAL são ASSINCRONOS ou seja outros códigos colocados depois de ambos serão executados depois do código abaixo.
/*
setTimeout(() => {
    console.log("Console dentro do SETTIMEOUT");
}, 4000);
console.log("Console fora so SETTIMEOUT");
*/

// Limpando SetInterval e SetTimeout
// Criamos uma variável e colocamos o SETINTERVAL dentro dela.
let idDoIntervalo = setInterval(() => {
    console.log("Executando a cada 2 segundos");
}, 2000);
// Aqui é só para mostrar na ferramenta a execução
console.log(idDoIntervalo);
// Aqui estamos encerrando o SETINTERVAL
clearInterval(idDoIntervalo)


