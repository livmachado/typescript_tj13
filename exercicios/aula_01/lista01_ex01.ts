import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

for(let i=0; i<5; i++){
    cores.push(leia.question(`Digite a ${i+1} cor: `));
}

// Usado para fins de teste
// cores.push("Azul", "Verde", "Amarelo", "Branco", "Laranja"); 


console.log("\nListar todas as cores:\n")

for(let i=0; i<5; i++){
    console.log(cores[i])
}

console.log("\nOrdenar as cores:\n")

cores.sort()//ordena em ordem alfabetica

for(let i=0; i<5; i++){
    console.log(cores[i])
}