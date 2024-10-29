// MÉTODOS

// No contexto de objetos em JavaScript, métodos são funções que estão associadas a um objeto e são definidas como parte desse objeto. Eles representam ações que o objeto pode realizar, permitindo que você agrupe comportamento e dados relacionados.

// Criando um objeto e iremos colocar um método (função) e ira excluir esse nome.
let usuario = {
    nome:"Leonard",
    excluir: function () {
        console.log("O Usuário, " + this.nome + " foi excluido com sucesso!");
    }
}

// Aqui estamos chamando a função excluir que está dentro do objeto usuário.
usuario.excluir ()





