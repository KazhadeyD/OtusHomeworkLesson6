const exportFunctions = require('../src/lesson8');

describe('task1', () => {
  it('Get day of week', () => {
    console.log = jest.fn();
    exportFunctions.task1('23.06.2022');
    expect(console.log.mock.calls[0][0]).toBe('четверг');
  });
});

describe('task2', () => {
  it('Get minutes from date', () => {
    console.log = jest.fn();
    exportFunctions.task2('23.06.2022 01:15:00');
    expect(console.log.mock.calls[0][0]).toBe(75);
  });
});

describe('task3', () => {
  it('Compare two dates', () => {
    expect(exportFunctions.task3('23.06.2022', '22.06.2022')).toBe(1);
  });
  it('Compare two dates', () => {
    expect(exportFunctions.task3('22.06.2022', '23.06.2022')).toBe(0);
  });
});
