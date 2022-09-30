//Quem costuma determinar quais são as responsabilidades de uma classe são as pessoas que usam o sistema, e não os desenvolvedores
// Se, por exemplo, em uma empresa, duas pessoas pedirem para alterar duas coisas na mesma classe, quer dizer que essa classe está tendo mais de uma responsabilidade

/** Tem que ter:
 * Items: Sim
 * Dados da ordem: Suspeito
 * Método para adicionar Items: Sim
 * Getter dos items do carrinho: Sim
 * Getter de order status: Suspeito
 * Total: Sim
 * Checkout do carrinho de compras: Não
 * Save order: Sim
 * Clear: É uma propriedade privada, então sem dúvidas
 * Validação: deveria ser uma responsabilidade à parte.
 */

import { Discount } from './Discount';
import { CartItem } from './interfaces/CartItem';

//Tudo que puder ser separado em módulos, será separado em modulos.

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get total(): number {
    return +this._items.reduce((acc, val) => acc + val.price, 0).toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Shopping cart has been cleared');
    this._items.length = 0;
  }
}
