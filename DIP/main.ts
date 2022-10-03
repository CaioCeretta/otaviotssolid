/**
 * Dependency Inversion diz que não módulos de alto nível não dvem depender de módulos de baixo nível.
 * Ambos devem depender de abstrações como classes e interfaces.
 * Dependa de abstrações, não de implementações (classes concretas)
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
 *
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível
 */

import { Messaging } from './services/Messaging';
import { Order } from './classes/Order';
import { Persistency } from './services/Persistency';
import { Product } from './classes/Product';
import { ShoppingCart } from './classes/ShoppingCart';
import {
  // Discount,
  // FiftyPercentDiscount,
  TenPercentDiscount,
  // NoDiscount,
} from './classes/Discount';
import {
  EnterpriseCustomer /* IndividualCustomer */,
} from './classes/Customer';
import { MessagingProtocol } from './classes/interfaces/MessagingProtocol';

// const individualCustomer = new IndividualCustomer(
//   'Caio',
//   'Ceretta',
//   '11111111',
// );

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('The message was sent by mock');
  }
}

/* Um dos motivos principais para isso seria para criar os objetos mock para efetuar os testes */
const enterpriseCustomer = new EnterpriseCustomer(
  'MBTex',
  'Batista',
  '11111111/11',
);

const messagingMock = new MessagingMock();

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const cart = new ShoppingCart(tenPercentDiscount);
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(cart, messagingMock, persistency, enterpriseCustomer);

cart.addItem(new Product('Shirt', 49.9));
cart.addItem(new Product('Pen', 5.9));
cart.addItem(new Product('Pencil', 1.9));

console.log(cart.items);
console.log(cart.total);
console.log(cart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
