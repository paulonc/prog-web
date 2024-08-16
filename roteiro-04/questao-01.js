const numbers = [1, 60, 232, 7, 25, 76, 29,74, 92]

const filter = n => n > 60 && n < 300
const lista = numbers.filter(filter)

let somatorio = 0;
lista.forEach(n => somatorio += n);

console.log(`A lista dos valores maiores que 60 é: ${lista}. 
A soma dos elementos da lista é: ${somatorio}.`)
