// Tanto 'it' quanto 'test' funcionam da mesma maneira, assim como o nome dos arquivos '.test' e '.spec'

it('description of the test (IT)', () => {
  const number = 1;

  expect(number).toBe(1);
});

test('description of the test (Teste)', () => {
  const number = 1;

  expect(number).toBe(1);
});

// Denial

it('Description of the denial test', () => {
  const number = 2;

  expect(number).not.toBe(1);
});

describe('Primitive values', () => {
  it('Should test jest assertions with primitives', () => {
    // Testes com numbers
    const number = 10;

    expect(number).toBe(10); //Checa com object.is
    expect(number).toEqual(10); //Mesmo que os objetos tenham os exatos mesmos valores, o tipo anterior não funcionaria

    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10, 1); //Para fazer checagem aproximada
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });

  it('Should split tests', () => {
    // Testes com numbers
    const number = 10;

    expect(number).toBe(10); //Checa com object.is
    expect(number).toEqual(10); //Mesmo que os objetos tenham os exatos mesmos valores, o tipo anterior não funcionaria

    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10, 1); //Para fazer checagem aproximada
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should be jest assertions with objects ', () => {
    const person = { name: 'Caio', age: 26 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);

    expect(person).toHaveProperty('name', 'Caio'); // O primeiro argumento é o que sera comparado com o segundo, nesse caso
    expect(person).not.toHaveProperty('surname');
  });
});
