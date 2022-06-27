const exportFunctions = require('../src/lesson1');

describe('task1', () => {
  it('Output sum of two elements', () => {
    for (let i = 0; i < 10; i++) {
      console.log = jest.fn();
      const a = Math.floor(Math.random() * 100) + 1;
      const b = Math.floor(Math.random() * 100) + 1;

      exportFunctions.task1(a, b);
      expect(console.log.mock.calls[0][0]).toBe(a + b);
    }
  });
});

describe('task2', () => {
  it('Output total length', () => {
    console.log = jest.fn();
    const a = 'qweasdzxc';
    const b = '12345';
    exportFunctions.task2(a, b);
    expect(console.log.mock.calls[0][0]).toBe(14);
  });
});

describe('task3', () => {
  it('Output sum of digits in number', () => {
    console.log = jest.fn();
    exportFunctions.task3(123);
    expect(console.log.mock.calls[0][0]).toBe(6);
  });
});
