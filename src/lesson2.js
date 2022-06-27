function task1 (a, b) {
  console.log(a > b ? a : b);
}

function task2 (monthNumber) {
  if (monthNumber < 1 || monthNumber > 12) { console.log(undefined); }
  const date = new Date();
  date.setMonth(monthNumber - 1);
  console.log(date.toLocaleDateString('ru-ru', { month: 'long' }));
}

function task3 (circle, square) {
  return circle <= square;
}
const exportedFunction =
  {
    task1,
    task2,
    task3
  };

module.exports = exportedFunction;
