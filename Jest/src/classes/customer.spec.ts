import { IndividualCustomer, EnterpriseCustomer } from './Customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  fantasyName: string,
  responsible: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(fantasyName, responsible, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('Individual Customer', () => {
  it('Should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Jorge', 'Soares', '1111111111-11');

    expect(sut).toHaveProperty('firstName', 'Jorge');
    expect(sut).toHaveProperty('surname', 'Soares');
    expect(sut).toHaveProperty('cpf', '1111111111-11');
  });

  it('Should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Jorge', 'Soares', '1111111111-11');

    expect(sut.getName()).toBe('Jorge Soares');
    expect(sut.getIDN()).toBe('1111111111-11');
  });
});

describe('Enterprise Customer', () => {
  it('Should have firstName, lastName and cpf', () => {
    const sut = createEnterpriseCustomer('MBTex', 'Batista', '111111111/11');

    expect(sut).toHaveProperty('fantasyName', 'MBTex');
    expect(sut).toHaveProperty('responsible', 'Batista');
    expect(sut).toHaveProperty('cnpj', '111111111/11');
  });

  it('Should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('MBTex', 'Batista', '111111111/11');

    expect(sut.getName()).toBe('MBTex');

    expect(sut.getIDN()).toBe('111111111/11');
  });
});
