import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './Discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};
describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have no discount', () => {
    const sut = createSut(NoDiscount);

    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('Should apply 50% discoutn on price', () => {
    const sut = createSut(FiftyPercentDiscount);

    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('Should apply 10% discoutn on price', () => {
    const sut = createSut(TenPercentDiscount);

    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
