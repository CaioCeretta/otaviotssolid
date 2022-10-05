/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { CartItem } from './interfaces/CartItem';
import { CustomerOrder } from './interfaces/Customer-Protocol';
import { MessagingProtocol } from './interfaces/MessagingProtocol';
import { PersistencyProtocol } from './interfaces/PersistencyProtocol';
import { ShoppingCartProtocol } from './interfaces/ShoppingCart-protocol';
import { Order } from './Order';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return [];
  }
  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder() {}
}

class CustomerMock implements CustomerOrder {
  getIDN(): string {
    return '';
  }
  getName(): string {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();

  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistencyMock,
  };
};

describe('Order', () => {
  it('should not checkout the order if the cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();

    //Esse mockReturnValueOnce está "mockando" o valor de isEmpty
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);
    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('Open');
  });

  it('should checkout the order if the cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();

    //Esse mockReturnValueOnce está "mockando" o valor de isEmpty
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('Closed');
  });

  it('Send message should send an e-mail to the customer', () => {
    const { sut, messagingMock } = createSut();

    const messageMockSpy = jest.spyOn(messagingMock, 'sendMessage');

    sut.checkout();
    expect(messageMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should save order', () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();

    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });
});
