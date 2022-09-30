//Na clean architecture a camada main é o local onde importamos as dependencias, injetamos as independencias, iniciamos o programa

import { Messaging } from './Messaging';
import { Order } from './Order';
import { Persistency } from './Persistency';
import { Product } from './Product';
import { ShoppingCart } from './ShoppingCart';

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
