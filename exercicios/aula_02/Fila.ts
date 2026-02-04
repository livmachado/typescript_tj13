import input from "readline-sync";
import { Queue } from "../../aula_02/fila/Queue";

const queue = new Queue<string>();
let opc: number;

while (true) {
  menu();

  opc = input.questionInt("\nEntre com a opcao desejada: ");

  if (opc === 0) {
    console.log("\nObrigada pela preferencia");
    sobre();
    process.exit(0);
  }
  switch (opc) {
    case 1:
      let name = input.question("Digite o nome: ");
      queue.enqueue(name);
      console.clear();
      console.log("Fila");
      queue.printQueue();
      console.log("\nCliente Adicionado!");
      keyPress();
      break;
    case 2:
      console.clear();
      console.log("\nLista de Clientes na Fila:");
      queue.printQueue();
      keyPress();
      break;
    case 3:
      console.clear();
      if (queue.isEmpty()) {
        console.log("A Fila está vazia!")
        keyPress();
        break;
      } else {
        queue.dequeue();
        console.log("\nFila:");
        queue.printQueue();
        console.log("\nO Cliente foi Chamado!");
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
  console.log("            1 - Adicionar Cliente na Fila             ");
  console.log("            2 - Listar todos os Clientes              ");
  console.log("            3 - Retirar Cliente da Fila               ");
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
