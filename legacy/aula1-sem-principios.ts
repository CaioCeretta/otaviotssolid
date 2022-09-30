// Primeiro fará o codigo sem os principios, e após concluido  e funcional, aí devemos refatorar
type CartItem = { name: string; price: number };
type OrderStatus = 'Open' | 'Closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'Open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  get total(): number {
    return +this._items.reduce((acc, val) => acc + val.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }

    this._orderStatus = 'Closed';
    this.sendMessage(`Your order totalling ${this.total} has been received!`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(`Message sent: ${msg}`);
  }

  saveOrder(): void {
    console.log('Order has been successfully saved...');
  }

  clear(): void {
    console.log('Shopping cart has been cleared');
    this._items.length = 0;
  }
}
