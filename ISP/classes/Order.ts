import { OrderStatus } from './interfaces/OrderStatus';
import { Messaging } from '../services/Messaging';
import { Persistency } from '../services/Persistency';
import { ShoppingCart } from './ShoppingCart';

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  //Injeção de dependencias para a classe order delegar as tarefas
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }

    this._orderStatus = 'Closed';
    this.messaging.sendMessage(
      `Your order totalling ${this.cart.total} has been received!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
