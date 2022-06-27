const exportFunctions = require('../src/lesson4');

describe('task1', () => {
  it('Get object with age 10', () => {
    console.log = jest.fn();
    exportFunctions.task1(10);
    expect(console.log.mock.calls[0][0]).toMatchObject({ age: 10, user: 'John' });
  });
});

describe('task2', () => {
  it('Get object with name admin', () => {
    console.log = jest.fn();
    exportFunctions.task2();
    expect(console.log.mock.calls[0][0]).toMatchObject({ user: 'admin' });
  });
});
