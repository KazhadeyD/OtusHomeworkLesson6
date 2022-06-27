function diff (a, b) {
  return Math.abs(a - b);
}

function isWord (arr) {
  return arr.split(' ').length < 2;
}

function pow (a, x) {
  return Math.pow(a, x);
}

const exportedFunction =
  {
    diff,
    isWord,
    pow
  };

module.exports = exportedFunction;
