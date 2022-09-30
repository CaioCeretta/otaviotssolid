/*
Liskov Substitution Principle - Se o Φ(x) é uma propriedade demonstrável dos objetos x de tipo T. então Φ(y) deve ser verdadeiro para objetos y de tipo S
onde S é subtipo de T.

Resumindo: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se o programa espera um Animal, algo do tipo Cachorro (que herda de animal) deve servir como qualquer outro animal

Basicamente é: Se o meu programa espera um mamífero, esperamos que ele mame. Se um mamífero não mama, em teoria ele não deveria ser um mamífero.
O LSP pede pra você ter coerência, quando usar a relação de é um
No exemplo desse programa é, o comportamento esperado dos subtipos de discount, tem que ser o mesmo do da classe pai
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
