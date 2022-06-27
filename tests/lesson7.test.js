/**
 * @jest-environment jsdom
 */

'use strict';
const exportFunctions = require('../src/lesson7');

describe('task1', () => {
  beforeEach(() => {
    document.body.innerHTML =
    '<div>' +
    '  <p id="par"/>' +
    '  <input id="input"/>' +
    '  <button id="button"/>' +
    '</div>';
  });
  it('Hide button', () => {
    document.getElementById('input').addEventListener('input', () => {
      exportFunctions.task1();
    });
    document.getElementById('input').value = null;
    document.getElementById('input').dispatchEvent(new Event('input', { bubbles: true }));
    expect(document.getElementById('button').hidden).toBe(true);
  });
  it('Show button', () => {
    document.getElementById('input').addEventListener('input', () => {
      exportFunctions.task1();
    });
    document.getElementById('input').value = 'null';
    document.getElementById('input').dispatchEvent(new Event('input', { bubbles: true }));
    expect(document.getElementById('button').hidden).toBe(false);
  });
});

describe('task2', () => {
  beforeEach(() => {
    document.body.innerHTML =
        '<div>' +
        '  <p class="par"></p>' +
        '  <input id="input"/>' +
        '  <button id="button"></button>' +
        '</div>';
  });

  it('Create new paragraph and add text from input', () => {
    document.getElementById('button').addEventListener('click', () => {
      exportFunctions.task2();
    });
    document.getElementById('input').value = 'text';
    document.getElementById('button').dispatchEvent(new Event('click', { bubbles: true }));
    expect(document.querySelectorAll('.par')[1].innerHTML).toBe('text');
  });
});

describe('task3', () => {
  beforeEach(() => {
    document.body.innerHTML =
            '<div>' +
            '  <p class="par"></p>' +
            '  <input id="input"/>' +
            '  <button id="button"></button>' +
            '</div>';
  });

  it('Remove paragraph if count > 5', () => {
    document.getElementById('button').addEventListener('click', () => {
      exportFunctions.task2();
      exportFunctions.task3();
    });

    for (let i = 0; i < 6; i++) {
      document.getElementById('input').value = `text${i}`;
      document.getElementById('button').dispatchEvent(new Event('click', { bubbles: true }));
    }
    expect(document.querySelectorAll('.par')[4].innerHTML).toBe('text5');
  });
});
