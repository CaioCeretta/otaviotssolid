//Essa interface é incompatível com as coisas que desejamos fazer, estamos que poderia se comportar como enterprise customer e vice versa

import {
  EntrerpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/Customer-Protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  constructor(
    public firstName: string,
    public surname: string,
    public cpf: string,
  ) {
    this.firstName = firstName;
    this.surname = surname;
    this.cpf = cpf;
  }
}

export class EnterpriseCustomer implements EntrerpriseCustomerProtocol {
  constructor(
    public fantasyName: string,
    public responsible: string,
    public cnpj: string,
  ) {
    this.fantasyName = fantasyName;
    this.responsible = responsible;
    this.cnpj = cnpj;
  }
}
