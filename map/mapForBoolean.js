// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthValuesOf = function (numbers) {
  return numbers.map(function (number) {
    return !(number === 0);
  });
};

// console.log(truthValuesOf([0, 1, 2, 3]));

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map(function (boolean) { return !boolean; });
};

console.log(negatedBooleansOf([true, false, true]));