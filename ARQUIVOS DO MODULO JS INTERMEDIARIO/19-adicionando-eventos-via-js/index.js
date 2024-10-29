// Podemos adicionar eventos em um elemento HTML utilizando o JavaScript. Nessa aula, vamos aprender como isso é possível.

/*
// Já criamos o HTML com um OPTION de estados e agora vamos ao JS.
// Vamos criar uma variável e pegar o select
let selectDeEstado = document.querySelector("select[name='estado']");
// Agora vamos criar o evento de CHANGE com o ADDEVENTLISTENER
selectDeEstado.addEventListener("change", function (){
        alert("Mudou o Estado!")
    }
)
console.log(selectDeEstado)
*/

// Existe outra forma de fazer a mesma coisa sem as variáveis, vamos ver como fica.
document.querySelector("select[name='estado']")
.addEventListener("change", function (event){
    alert("Mudou o Estado!")
    console.log(event.target.value);
    
})


