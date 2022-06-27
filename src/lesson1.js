function task1 (a, b) {
  console.log(a + b);
}

function task2 (a, b) {
  console.log(a.length + b.length);
}

function task3 (a) {
  const sum = a
    .toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

  console.log(sum);
}

const exportFunctions = {
  task1,
  task2,
  task3
};

module.exports = exportFunctions;
