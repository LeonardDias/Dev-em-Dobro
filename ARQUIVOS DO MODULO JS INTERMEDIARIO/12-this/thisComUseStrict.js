// THIS
"use strict"

// Em JavaScript, this é uma palavra-chave especial que faz referência ao contexto no qual a função está sendo executada. O valor de this pode variar dependendo de como e onde a função é chamada.

/*
// Aqui estamos vendo o THIS no escopo GLOBAL.
console.log(this);
this.nome = "Leonard"

// Aqui veremos o THIS no escopo LOCAL.
function saudar() {
    console.log("This no contexto da função", this);
    console.log("Olá, " + this.nome);
}
saudar()
*/

/*
// Aqui veremos como utilizar o THIS dentro de um método.
let usuario = {
    nome: "Leonard",
    saudar: function () {
        console.log("this no contexto do metodo", this);
        console.log("this.nome no contexto do metodo é:", this.nome);
    }
}
usuario.saudar()
*/

// Vamos ver agora uma coisa importante que pode acontecer utilizando o THIS.
// Criamos um objeto comida e vamos depois criar o método dele por fora.
let comida = {
    nome: "Brócolis",
    temperatura: 0
}
// E agora depois de instanciado vamos colocar um método agora, e com isso criamos dois parametros.
comida.cozinhar = function(temperaturaDeCozinhar){
    console.log("this no contexto do objeto comida", this);
    
    this.temperatura = temperaturaDeCozinhar
}

console.log(comida);

// Vamos agora chamar o método cozinhar
comida.cozinhar(100)
// Agora podemos ver a diferença na temperatura do Cozimento.
console.log(comida);
