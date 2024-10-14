/*
=           atribui valor a uma variável
== ---- igual ---- a==b ---- verdadeiro se A for igual a B
=== ---- identico ---- a===b verdadeiro se A for idêntico a B
!== ---- não idêntico ---- a!==b verdadeiro quando A não for idêntico a B
!= ---- diferente ---- a!=b verdadeiro se o A for diferente de B
< ---- menor que ---- a<b verdadeiro quando a for menor que b
> ---- maior que ---- a>b verdadeiro quando a for maior que b
<= ---- menor ou igual que ---- a<=b verdadeiro quando a for menor ou igual a b
>= ---- maior ou igual que ---- a>=b verdadeiro quando a for maior ou igual a b
*/

// == IGUAL
const a = 3
const b = "3"

console.log(a==b)
// aqui fiz um complemento com if / else
if(a==b){
    console.log("Valores Iguais")
} else {
    console.log("Valores Diferentes")
}

// === IDÊNTICO
// note no navegador que o == está true e o === está falso, pois foi transformado o 3 em string com as aspas e isso é o idêntico diferenciando o igual
console.log(a===b)

// !== NÃO IDÊNTICO aqui difere a tipagem
console.log(a!==b)

// != DIFERENTE aqui não difere a tipagem
console.log(a!=b)

// < MENOR QUE
console.log(a<b)

// > MENOR QUE
console.log(a>b)

// > MENOR OU IGUAL QUE
console.log(a<=b)

// > MAIOR OU IGUAL QUE
console.log(a>=b)