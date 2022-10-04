//Foram criados dois métodos para pegar o nome e o idn do customer, porém, não será alterado aqui para não ferir o princípio

export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  surname: string;
  cpf: string;
}

export interface EntrerpriseCustomerProtocol {
  fantasyName: string;
  responsible: string;
  cnpj: string;
}
