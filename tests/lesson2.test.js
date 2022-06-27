const exportFunctions = require('../src/lesson2');

describe('task1', () => {
  it('Output bigger number', () => {
    const data = [
      { a: 0, b: 1, res: 1 },
      { a: 2, b: 1, res: 2 },
      { a: 0, b: 0, res: 0 },
      { a: -1, b: 0, res: 0 }];
    for (let i = 0; i < data.length; i++) {
      console.log = jest.fn();
      const a = data[i].a;
      const b = data[i].b;

      exportFunctions.task1(a, b);
      expect(console.log.mock.calls[0][0]).toBe(data[i].res);
    }
  });
});

describe('task2', () => {
  it('Output month from number', () => {
    const data = [
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентябрь',
      'октябрь',
      'ноябрь',
      'декабрь'
    ];
    for (let i = 0; i < data.length; i++) {
      console.log = jest.fn();
      exportFunctions.task2(i + 1);
      expect(console.log.mock.calls[0][0]).toBe(data[i]);
    }
  });
  it('Output month from number. Wrong month number', () => {
    const data = [0, 13];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];

      console.log = jest.fn();
      exportFunctions.task2(element);
      expect(console.log.mock.calls[0][0]).toBe(undefined);
    }
  });
});

describe('task3', () => {
  it('Square bigger then circle', () => {
    expect(exportFunctions.task3(3, 5)).toBe(true);
  });
  it('Circle bigger then square', () => {
    expect(exportFunctions.task3(5, 3)).toBe(false);
  });
  it('Circle equals square', () => {
    expect(exportFunctions.task3(5, 5)).toBe(true);
  });
});
