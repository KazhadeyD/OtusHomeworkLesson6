const exportFunctions = require('../src/lesson5');

describe('task1', () => {
  it('Sum elements of array', () => {
    console.log = jest.fn();
    exportFunctions.task1([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    expect(console.log.mock.calls[0][0]).toBe(10);
  });
});

describe('task2', () => {
  it('Double elements of array', () => {
    console.log = jest.fn();
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    exportFunctions.task2(arr);
    expect(arr).toMatchObject([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    expect(console.log.mock.calls[0][0]).toMatchObject([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  });
});

describe('task3', () => {
  it('Min and max element in array', () => {
    console.log = jest.fn();
    const arr = [0, 1, 1, 1, 1, 1, 1, 1, 1, 9];
    exportFunctions.task3(arr);
    expect(console.log.mock.calls[0][0]).toBe(0);
    expect(console.log.mock.calls[1][0]).toBe(9);
  });
});
