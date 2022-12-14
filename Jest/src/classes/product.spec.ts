import { Product } from './Product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have propertier name and age', () => {
    const sut = createSut('Halter 2kg', 30);

    expect(sut).toHaveProperty('name', 'Halter 2kg');
    expect(sut.price).toBeCloseTo(30);
  });
});
