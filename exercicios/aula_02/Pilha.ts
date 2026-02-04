import input from "readline-sync";
import { Stack } from "../../aula_02/pilha/Stack";

const stack = new Stack<string>();
let opc: number;

while (true) {
  menu();

  opc = input.questionInt("\nEntre com a opcao desejada: ");

  if (opc === 0) {
    sobre();
    process.exit(0);
  }
  switch (opc) {
    case 1:
      let name = input.question("Digite o nome: ");
      stack.push(name);
      console.clear();
      console.log("Pilha:\n");
      stack.printReverse();
      console.log("\nLivro Adicionado!");
      keyPress();
      break;
    case 2:
      console.clear();
      console.log("\nLista de Livros na Pilha:");
      stack.printReverse();
      keyPress();
      break;
    case 3:
      console.clear();
      if (stack.isEmpty()) {
        console.log("A Pilha está vazia!")
        keyPress();
        break;
      } else {
        stack.pop();
        console.log("\nPilha:");
        stack.printReverse();
        console.log("\nUm Livro foi retirado da pilha!");
        keyPress();
      }
      break;
    default:
      console.log("Digite uma opcao valida!");
  }
}

function menu(): void {
  console.clear();
  console.log("******************************************************");
  console.log("                                                      ");
  console.log("            1 - Adicionar Livro na pilha             ");
  console.log("            2 - Listar todos os Livros              ");
  console.log("            3 - Retirar Livro da Fila               ");
  console.log("            0 - Sair                                  ");
  console.log("                                                      ");
  console.log("******************************************************");
}

function keyPress(): void {
  console.log("\nPressione enter para continuar...");
  input.prompt();
}

function sobre(): void {
  console.log("\nPrograma desenvolvido por Lívia");
}
