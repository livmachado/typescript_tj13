import leia = require("readline-sync");

// const numeros: Set<number> = new Set<number>();
const numeros = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

//Adiciona numeros aleatorios ate 100 no set

// for(let i=0; i<10; i++){
//     numeros.add(Math.floor(Math.random() * (100)) + 1)
// }

const numero = leia.questionInt("Digite o numero que voce deseja encontrar: ")

if (numeros.has(numero)) {
  console.log(`O numero ${numero} foi encontrado!`);
} else {
  console.log(`O numero ${numero} não foi encontrado!`);
}