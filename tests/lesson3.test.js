const exportFunctions = require('../src/lesson3');

describe('task1', () => {
  it('Sum all numbers from 50 to 100', () => {
    console.log = jest.fn();
    exportFunctions.task1();
    expect(console.log.mock.calls[0][0]).toBe(3825);
  });
});

describe('task2', () => {
  it('Muliply table of 7', () => {
    console.log = jest.fn();
    exportFunctions.task2();
    expect(console.log.mock.calls[0][0]).toBe('7 x 1 = 7');
    expect(console.log.mock.calls[1][0]).toBe('7 x 2 = 14');
    expect(console.log.mock.calls[2][0]).toBe('7 x 3 = 21');
    expect(console.log.mock.calls[3][0]).toBe('7 x 4 = 28');
    expect(console.log.mock.calls[4][0]).toBe('7 x 5 = 35');
    expect(console.log.mock.calls[5][0]).toBe('7 x 6 = 42');
    expect(console.log.mock.calls[6][0]).toBe('7 x 7 = 49');
    expect(console.log.mock.calls[7][0]).toBe('7 x 8 = 56');
    expect(console.log.mock.calls[8][0]).toBe('7 x 9 = 63');
  });
});

describe('task3', () => {
  it('Arithmetic Mean n=5', () => {
    console.log = jest.fn();
    exportFunctions.task3(5);
    expect(console.log.mock.calls[0][0]).toBe(3);
  });

  it('Arithmetic Mean n=3', () => {
    console.log = jest.fn();
    exportFunctions.task3(3);
    expect(console.log.mock.calls[0][0]).toBe(2);
  });

  it('Arithmetic Mean n=0', () => {
    console.log = jest.fn();
    exportFunctions.task3(0);
    expect(console.log.mock.calls[0][0]).toBe(0);
  });

  it('Arithmetic Mean n=2', () => {
    console.log = jest.fn();
    exportFunctions.task3(2);
    expect(console.log.mock.calls[0][0]).toBe(1);
  });
});
