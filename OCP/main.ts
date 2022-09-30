/*
open/closed principle diz que as entidades devem estar abertar para extensão, mas fechadas para modificação
Essa clase criada para a injeção de descontos está utilizando tanto o OCP quanto uma estrategia do GoF chamada Strategy.

dessa maneira que foi feito será mais simples, as classes que contém os algoritmos dos descontos são autocontidas, não precisando alterar outras enquanto desepenham o seu papel
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

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const cart = new ShoppingCart(tenPercentDiscount);
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(cart, messaging, persistency);

cart.addItem(new Product('Shirt', 49.9));
cart.addItem(new Product('Pen', 5.9));
cart.addItem(new Product('Pencil', 1.9));
// cart.items[0] = { name: 'Pen', price: 3.8 }; Isso não será possível pois colocamos que o array é readonly

// console.log(cart.items);
console.log(cart.total);
console.log(cart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
