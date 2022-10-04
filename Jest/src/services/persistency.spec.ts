import { Persistency } from './Persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());
  it('should return undefined ', () => {
    /*
    Em todos testes nós temos uma classe principal como a Persistency
    Por mais que tenhamos uma classe principal, muitas vezes temos classes auxiliares para executar a tarefa
    Um dos padrões que existem para diferenciar a classe principal é utilizando no nome da variavel 'sut' (System Under Test) na classe principal do teste
    */
    const sut = new Persistency();

    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  //Com o clear all mocks isso será possível de retornar verdadeiro, pois a contagem de console.logs irá voltar para 0 assim que o teste acabar.
  // it('should call console.log once', () => {
  //   const sut = new Persistency();
  //   const consoleSpy = jest.spyOn(console, 'log');
  //   sut.saveOrder();
  //   expect(consoleSpy).toHaveBeenCalledTimes(1);
  // });

  it('should call console.log with "Order has been successfully saved"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Order has been successfully saved...',
    );
  });
});
