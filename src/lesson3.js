function task1 () {
  let sum = 0;
  for (let i = 50; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}

function task2 () {
  for (let i = 1; i < 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}

function task3 (n) {
  if (n < 0) { console.log(undefined); } else if (n < 2) { console.log(n); }
  let sum = 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
      count++;
    }
  }
  console.log(sum / count);
}

const exportFunctions = {
  task1,
  task2,
  task3
};

module.exports = exportFunctions;
