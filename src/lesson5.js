function task1 (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

function task2 (arr) {
  const newArray = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[i] * 2;
  }
  console.log(newArray);
}

function task3 (arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }

  console.log(min);
  console.log(max);
}

const exportedFunction =
{
  task1,
  task2,
  task3
};

module.exports = exportedFunction;
