const hospedagem = confirm ("Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 RUPPIES para passar a noite em nossa hospedagem?")

console.log(hospedagem);

if (hospedagem) {
    alert ("Ótimo! Nós temos as melhores camas de todas as regiões!")
} else if (hospedagem === false) {
    alert ("Que pena! Você parecia ser uma pessoa mais legal!")
}

