import { PersistencyProtocol } from '../classes/interfaces/PersistencyProtocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Order has been successfully saved...');
  }
}
