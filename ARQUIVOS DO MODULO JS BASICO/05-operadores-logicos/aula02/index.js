// Aqui utilizaremos o OU(OR) - E(AND) e o NÃO(NOT)

// Aqui utilizamos as tabelas, no NOTION tem mais explicações.

const a = 2
const b = 2

// AND &&
// aqui estamos perguntando se a é idêntico a b E a menor ou igual a b, resposta true.
console.log(a===b && a<=b) // V e V = V

console.log(a===b && a<b) // V e F = F

console.log(a>b && a===b) // F e V = F

console.log(a>b && a<b) // F e F = F

// OR ||
console.log(a===b || a<=b) // V ou V = V

console.log(a===b || a<b) // V ou F = V

console.log(a>b || a===b) // F e V = V

console.log(a>b || a<b) // F e F = F

// NOT !
console.log(!(a===b))

console.log(!(a<b))




