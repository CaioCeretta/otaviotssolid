//Na clean architecture a camada main é o local onde importamos as dependencias, injetamos as independencias, iniciamos o programa

import { Messaging } from './services/Messaging';
import { Order } from './classes/Order';
import { Persistency } from './services/Persistency';
import { Product } from './classes/Product';
import { ShoppingCart } from './classes/ShoppingCart';

const cart = new ShoppingCart();
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(cart, messaging, persistency);

cart.addItem(new Product('Shirt', 49.9));
cart.addItem(new Product('Pen', 5.9));
cart.addItem(new Product('Pencil', 1.9));
// cart.items[0] = { name: 'Pen', price: 3.8 }; Isso não será possível pois colocamos que o array é readonly

// console.log(cart.items);
console.log(cart.total);
order.checkout();
console.log(order.orderStatus);
