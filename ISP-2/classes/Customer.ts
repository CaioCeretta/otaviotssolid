//Essa interface é incompatível com as coisas que desejamos fazer, estamos que poderia se comportar como enterprise customer e vice versa

import {
  CustomerOrder,
  EntrerpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/Customer-Protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  constructor(
    public firstName: string,
    public surname: string,
    public cpf: string,
  ) {
    this.firstName = firstName;
    this.surname = surname;
    this.cpf = cpf;
  }
  getName(): string {
    return this.firstName + ' ' + this.surname;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EntrerpriseCustomerProtocol, CustomerOrder
{
  constructor(
    public fantasyName: string,
    public responsible: string,
    public cnpj: string,
  ) {
    this.fantasyName = fantasyName;
    this.responsible = responsible;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.fantasyName;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
