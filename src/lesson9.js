function task1 (a, b, c) {
  return a * a + b * b === c * c;
}

function task2 (r) {
  console.log('l ' + (Math.round(2 * Math.PI * r * 100) / 100).toFixed(2));
  console.log('s ' + (Math.round(Math.PI * r * r * 100) / 100).toFixed(2));
}

function task3 (a, b, c) {
  const d = b * b - 4 * a * c;
  if (d < 0) {
    console.log(undefined);
    return;
  }

  const x1 = (-b + Math.sqrt(d)) / 2 * a;
  const x2 = (-b - Math.sqrt(d)) / 2 * a;

  console.log('x1 ' + x1 + ' ' + 'x2 ' + x2);
}

const exportedFunction =
      {
        task1,
        task2,
        task3
      };

module.exports = exportedFunction;
