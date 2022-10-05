//Primeiro teste com mocks e com mais de uma dependência
//Serão feitos testes isolados

import { Discount } from './Discount';
import { CartItem } from './interfaces/CartItem';
import { ShoppingCart } from './ShoppingCart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSutWIthProducts = () => {
  const { sut, discountMock } = createSut();

  const cartItem1 = createCartItem('shirt', 40);
  const cartItem2 = createCartItem('pen', 1);

  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('should be an empty cart if no product is added', () => {
    const { sut } = createSut();

    expect(sut.isEmpty()).toBe(true);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWIthProducts();

    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should be able to add two products', () => {
    const { sut } = createSutWIthProducts();

    expect(sut.items.length).toBeGreaterThanOrEqual(2);
  });

  it('should be able to retrieve total and totalWithDiscount of the cart', () => {
    const { sut } = createSutWIthProducts();
    expect(sut.total()).toBeGreaterThanOrEqual(41);
    expect(sut.totalWithDiscount()).toBeGreaterThanOrEqual(41);
  });

  it('should remove products', () => {
    const { sut } = createSutWIthProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(0);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call Discount.calculate(price) when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWIthProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();

    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call Discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWIthProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();

    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call Discount.calculate with totalPrice when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWIthProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();

    expect(discountMockSpy).toHaveBeenCalledWith(41);
  });
});
