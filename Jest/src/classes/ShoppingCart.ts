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
import { ShoppingCartProtocol } from './interfaces/ShoppingCart-protocol';

//Tudo que puder ser separado em módulos, será separado em modulos.

/** Se quisermos saber o nível de abstração de algo, quanto mais abstrata é uma coisa, mais abstrata ela é
 * Uma interface seria o mais alto nível possível, pois ela não faz nada, só fala o que uma classe deve fazer
 * e extremo baixo nível seria uma classe que implementa um método que faz algo, ela é chamada de uma classe concreta
 */

export class ShoppingCart implements ShoppingCartProtocol {
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

  total(): number {
    return +this._items.reduce((acc, val) => acc + val.price, 0).toFixed(2);
  }

  /**
   * Como está chamando um método que retorna unknown, essa função, que tem retorno number, não funcionará mais exatamente do mesmo jeito. Quebrando o princípio de Liskov
   * precisando alterar todas as funções que chamam o método calculate
   *
   * Isso funciona de maneira polimorfica pois espera que qualquer "discount" tenha o método calculate e que realize o esperado.
   *  Se, precisarmos chegar a tipagem do result, isso quer dizer que existe um método que pode quebrar esse princípio da substituição.

   */

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());

    // if (typeof result === 'number') {
    //   return result;
    // }

    // return this.total();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Shopping cart has been cleared');
    this._items.length = 0;
  }
}
