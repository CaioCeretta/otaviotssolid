// Esse retorno diferente do retorno das funções que já o chamam, não irá interferir aqui, mas sim, quando a função é chamada, fazendo com que não funcione como antesy

//Caso a classe não fosse abstrata e o desenvolvedor quisesse forçar com que esse método fosse criado em outras classes poderia ser feito desta menira
export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  } // Isso fará com que nas outras classes, caso não crie esse método, será executado o da função pai
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

//Em teoria essa classe não teria um desconto, mas de maneira sútil, sem violar a tipagem, porque mudou o comportamento.
export class NoDiscount extends Discount {
  calculate(price: number): number {
    return 10000000000000000000;
    //Isso também seria uma mudança sutil que resultaria na quebra do princípio LSP
  }
}
