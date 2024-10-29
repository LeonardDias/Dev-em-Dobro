// Manipulando atributos e estilos dos elementos do DOM
// Criamos o HTML
// Agora estamos criando uma FUNÇÃO para o botão ONCLICK
function alterarCorDeFundoPrimeiroPost() {
    // Vamos agora bucar a CLASSNAME que é post e clicando nele mostra o resultado
    let posts = document.getElementsByClassName("post");
    // console.log(posts);
    // Como vamos pegar apenas o PRIMEIRO POST vamos a ele
    let primeiroPost = posts[0];
    // Mostra o primeiro post selecionado
    // console.log("primeiroPost", primeiroPost);
    // Aqui vamos mudar o ESTILO CSS dele (mesmo não existindo)    
    primeiroPost.style.backgroundColor = "red";   
}
// Aqui é muito parecido com o que vimos antes, porém com algumas mudanças.
function aumentarFonteSegundoPost() {
    // Vamos criar uma variável e busca-la pela classe
    let textoPosts = document.getElementsByClassName("texto-post");
    // Aqui buscamos a posição dela e adicionamos o CSS e quando clicarmos no botão a fonte aumentará.
    textoPosts[1].classList.add("font-grande")
    // Aqui é para demosntrar no browser como fica
    console.log(textoPosts[1].classList);
}

// Agora vamos ver como se modificam os ATRIBUTOS dos ELEMENTOS de HTML.
// Depois de criados dois botões e passados os parâmetros para eles vamos criar a função.
function marcarRadio(genero) {
    // Vamos dar um console.log e testar no browser
    //console.log(genero);
    // Depois de criado os radios buttons no HTML esmos aqui para continuar.
    let radioMasculino = document.getElementById("genero-masculino");
    let radioFeminino = document.getElementById("genero-feminino")
    // Agora vamos criar a alteração no HTML com o checked com o IF.
    if(genero === "M") {
        radioMasculino.checked = true; 
    } else if (genero === "F") {
        radioFeminino.checked = true;
    }
}


