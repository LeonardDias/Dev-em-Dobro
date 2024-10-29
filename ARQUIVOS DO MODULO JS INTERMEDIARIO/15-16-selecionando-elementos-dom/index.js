// Agora vamos aprender a selecionar os elementos do DOM através do document.
// Exibindo todo o document
//console.log(document);


// Aqui vamos buscar apenas uma linha do document inteiro, a que foi instanciado no HTML com a ID: PARAGRAFO1, note que ainda ela não será exibida no CONSOLELOG. Para exibi la teremos que colocar ela em uma variável, para depois dar o CONSOLE.LOG
let p = document.getElementById('paragrafo1')
console.log(p)



// Agora vamos buscar os e-mails digitados no HTML por CLASS.
let inputsPorClasse = document.getElementsByClassName("tag-de-input")
console.log(inputsPorClasse);

// Se quisermos puxar apenas um dos elementos basta colocar a posição de todos que tem a class igual
//let inputsPorClasse = document.getElementsByClassName("tag-de-input")
console.log(inputsPorClasse[1]);



// Agora faremos as buscas por TAGS.
// Note que ele vai achar os mesmo dois pois a tag utilizada foi o INPUT.
let inputPorTag = document.getElementsByTagName("input")
console.log(inputPorTag);
// Outro exemplo
let tituloPorTag = document.getElementsByTagName("h1")
console.log(tituloPorTag);


// Busca pelo nome utilizando o QUERYSELECTORALL
let inputPorName = document.querySelectorAll("input[name='email']")
console.log(inputPorName);

