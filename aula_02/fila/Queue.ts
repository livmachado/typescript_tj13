interface queueInterface<Type> {
   enqueue(dataItem: Type): void;
   dequeue(): Type | undefined;
   isEmpty(): boolean;
   count(): number;
   printQueue(): void;
   peek(): Type | undefined;
   contains(dataItem: Type): boolean;
   clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {

   private QueueData: Array<Type> = [];

   constructor() { }
   //Verifica se a fila está vazia
   isEmpty(): boolean {
      let result = this.QueueData.length <= 0;
      return result;
   }

   //Adicinar elemento no final da fila
   enqueue(dataItem: Type): void {
      this.QueueData.push(dataItem); 
   }

   //remove o primeiro elemento da fila
   dequeue(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData.shift();
         return element;
      }
   }

   //Retorna o numero de elementos da fila
   count(): number {
      let len = this.QueueData.length;
      return len;
   }

   //exibe todos os elementos da fila
   printQueue(): void {
      for (let i = 0; i < this.QueueData.length; i++) {
         console.log(this.QueueData[i]);
      }
   }

   //exibe o primeiro elemento da fila(ponteiro HEAD), caso a fila esteja vazia retorna nulo
   peek(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData[0];
         return element;
      }
   }
   //Verifica se a fila contem o elemento fornecido ou não
   contains(dataItem: Type): boolean {
      if (this.QueueData.includes(dataItem)) {
         return true;
      } else {
         return false;
      }
   }

   //Remove todos os elementos da fila
   clear(): void {
      this.QueueData.length = 0;
   }

}