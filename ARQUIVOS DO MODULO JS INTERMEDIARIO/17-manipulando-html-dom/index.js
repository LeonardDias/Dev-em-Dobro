// Como manipular os elementos do DOM
// Aqui iremos colocar uma função no ONCLICK criado lá no HTML.

// Aqui toda vez que colocarmos um comnetário novo e clicarmos no botão ele ira adicionar.
// Estamos recolhendo e armazenando o novo comentário.
function adicionarComentario () {
    let inputComentario = document.getElementsByName ("novo-comentario")
    let textoDigitado = inputComentario[0].value; 

    // Vamos armazenar o novo comentário e colocar no HTML.
    let novosComentarios = document.getElementById("novos-comentarios")

    // Agora vamos colocar para aparecer. Colocaremos com apostrofo pois iremos colocar o novo texto digitado.
    novosComentarios.innerHTML += `<p>Novo Comentário: ${textoDigitado}</p>`

}

