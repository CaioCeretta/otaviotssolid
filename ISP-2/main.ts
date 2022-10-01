/**
 * Interface Segregation Principle diz que os clientes não devem ser forçados a depender, tipos ou classes que não utilizem
 * Ou seja, se por exemplo tivessemos a classe do cliente e o cliente tivesse cpf e cnpj obrigatórios, seria um exemplo
 * não devemos criar interfaces muito infladas, pois isso faz com que outras classes sejam  obrigadas a criar coisas que não utilizarão, ferindo o principio
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
import { EnterpriseCustomer, IndividualCustomer } from './classes/Customer';

const individualCustomer = new IndividualCustomer(
  'Caio',
  'Ceretta',
  '11111111',
);

const enterpriseCustomer = new EnterpriseCustomer(
  'MBTex',
  'Batista',
  '11111111/11',
);

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const cart = new ShoppingCart(tenPercentDiscount);
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(cart, messaging, persistency, enterpriseCustomer);

cart.addItem(new Product('Shirt', 49.9));
cart.addItem(new Product('Pen', 5.9));
cart.addItem(new Product('Pencil', 1.9));

console.log(cart.items);
console.log(cart.total);
console.log(cart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
