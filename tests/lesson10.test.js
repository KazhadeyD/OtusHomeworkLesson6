const exportFunctions = require('../src/lesson10');

describe('task1', () => {
  it('Is date', () => {
    expect(exportFunctions.task1('30.11.2021')).toBe(true);
  });
});

describe('task2', () => {
  it('Is Email true', () => {
    expect(exportFunctions.task2('someone@gmail.com')).toBe(true);
  });
  it('Is Email false', () => {
    expect(exportFunctions.task2('someonegmail.com')).toBe(false);
  });
  it('Is Email false', () => {
    expect(exportFunctions.task2('someone@gmail.c')).toBe(false);
  });
});

describe('task3', () => {
  it('Is mobile phone', () => {
    expect(exportFunctions.task3('+78112223344')).toBe(true);
  });
});
