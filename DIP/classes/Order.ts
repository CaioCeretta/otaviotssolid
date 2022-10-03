import { OrderStatus } from './interfaces/OrderStatus';
import { CustomerOrder } from './interfaces/Customer-Protocol';
import { ShoppingCartProtocol } from './interfaces/ShoppingCart-protocol';
import { MessagingProtocol } from './interfaces/MessagingProtocol';
import { PersistencyProtocol } from './interfaces/PersistencyProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  /**
   * Como a order depende de shppping cart a order é de alto nivel e a shopping cart/messaging de baixo nível
   * A order não sabe o que fazer sem o shopping cart, ou até mesmo a messaging de  baixo nível e assim por diante
   *
   * Vemos que no código estamos fazendo algo de errado.
   * Na classe Order, que é uma classe de alto nível, estamos fazendo ela depender de uma classe de baixo nível
   * é uma classe concreta dependendo de uma classe concreta, as duas classes só andam juntas, só funciona corretamente se essas outras classes
   * forem instanciadas e serem usadas como dependencias, isso é um código muito aclopado.
   *
   * Agora todas as dependencias são abstrata, não são mais classes.
   *
   *
   * */
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
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
      `Your order totalling ${this.cart.total()} has been received!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `The name of the client is ${this.customer.getName()}, and the client idn is ${this.customer.getIDN()}`,
    );
  }
}
