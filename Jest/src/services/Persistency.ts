import { PersistencyProtocol } from '../classes/interfaces/PersistencyProtocol';

// Não deveriamos receber apenas algo concreto dentro do método, nesse caso o console
export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Order has been successfully saved...');
  }
}
