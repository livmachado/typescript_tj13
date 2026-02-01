import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for(let i=0; i<10; i++){
    numeros.add(leia.questionInt(`Digite o ${i+1} numero: `));
}

console.log("\nListar dados do Set:")

const numerosOrd = (Array.from(numeros)).sort((a, b) => a - b) // Transforma o set em um Array ordenado
const numerosOrdSet = new Set(numerosOrd) // Tranforma o Array ordenado em set

for(let numero of numerosOrdSet){
    console.log(numero)
}