import leia = require("readline-sync");

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

console.log("Lista de numeros:")
console.log(numeros.join(" "))

let numero = leia.questionInt("Digite o numero que voce deseja encontrar: ")

// Verifica o indice do elemento
console.log(`O indice do numero ${numero}: `, numeros.indexOf(numero));
