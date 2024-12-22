// squares of [1, 2, 3] => [1, 4, 9]
const squaresOf = function (numbers) {
  return numbers.map(function (number) { return number * number; });
};

// console.log(squaresOf([1, 2, 3]));

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const charCodesOf = function (strings) {
  return strings.map(function (char) { return char.charCodeAt(); });
};

// console.log(charCodesOf(["a", "b", "c"]));

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map(function (numbers) { return numbers.reverse(); });
};

// console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const runningSum = function (numbers) {
  const list = [];
  let sum = 0;

  numbers.map(function (number) {
    sum += number;
    list.push(sum);
  });

  return list;
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(runningSum);
};

// console.log(cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const getRangeList = function (number) {
  const list = [];

  for (let index = 0; index < number; index++) {
    list.push(index);
  }

  return list;
};

const rangesOf = function (numbers) {
  return numbers.map(getRangeList);
};

// console.log(rangesOf([3, 5, 2]));

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenArray = function (array) {
  return array.flatMap(function (number) { return number; });
};

const flattenedArraysOf = function (arrays) {
  return arrays.map(flattenArray);
};

// console.log(flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));

// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const percentageContributions = function (numbers) {
  const totalOfNumbers = numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);

  return numbers.map(function (number) {
    return (number / totalOfNumbers) * 100;
  });
};

console.log(percentageContributions([10, 20, 30]));