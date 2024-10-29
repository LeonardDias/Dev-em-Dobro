// Passo 1 - Pegar todos os inputs que tenham a mesma classe com o querySelectorAll.
let inputs = document.querySelectorAll ("input.borda")
// Passo 2 - Dar um jeito de percorrer cada input - vamos utilizar o laço de repetição forEach para percorrer cada input.
inputs.forEach (input => {
	// Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
    input.addEventListener("change", () => {
        // Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.
        if (input.value !== "") {
        // Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.
            input.classList.add("borda-preenchida")
        } else {
		// Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
            input.classList.remove("borda-preenchida")
        }
    })
})
