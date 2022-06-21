const exportFunctions = require('../src/lesson9');

describe('task1', () => {
  it('Right triangle', () => {
    expect(exportFunctions.task1(3, 4, 5)).toBe(true);
  });
});

describe('task2', () => {
  it('Get minutes from date', () => {
    console.log = jest.fn();
    exportFunctions.task2(3);
    expect(console.log.mock.calls[0][0]).toBe('l 18.85');
    expect(console.log.mock.calls[1][0]).toBe('s 28.27');
  });
});

describe('task3', () => {
  it('Get roots', () => {
    console.log = jest.fn();
    exportFunctions.task3(1, 1, 1);
    expect(console.log.mock.calls[0][0]).toBe(undefined);
  });

  it('Get roots', () => {
    console.log = jest.fn();
    exportFunctions.task3(1, 3, 2);
    expect(console.log.mock.calls[0][0]).toBe('x1 -1 x2 -2');
  });
});
