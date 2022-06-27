const exportFunctions = require('../src/lesson6');

describe('diff', () => {
  it('Difference between numbers', () => {
    expect(exportFunctions.diff(2, 9)).toBe(7);
  });
});

describe('isWord', () => {
  it('Check is string line is one word', () => {
    expect(exportFunctions.isWord('Double elements of array')).toBe(false);
  });
  it('Check is string line is one word', () => {
    expect(exportFunctions.isWord('Double')).toBe(true);
  });
});

describe('pow', () => {
  it('Power 2 in 5 degree', () => {
    expect(exportFunctions.pow(2, 5)).toBe(32);
  });
  it('Power 5 in 2 degree', () => {
    expect(exportFunctions.pow(5, 2)).toBe(25);
  });
});
