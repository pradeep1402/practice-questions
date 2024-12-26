// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
};
// console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((product, number) => number * product, 1);
};
// console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
};
// console.log(averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((min, number) => min > number ? number : min, Infinity);
};
// console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((max, number) => max < number ? number : max, -Infinity);
};
// console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  return numbers.reduce((sum, number) => number < 0 ? sum : sum + number, 0);
};
// console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  return numbers.reduce((sum, number) => sum + (number * number), 0);
};
// console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = (number) => (number & 1) === 1;
const sumOfOddNumbers = function (numbers) {
  return numbers.reduce((sum, number) => isOdd(number) ? number + sum : sum, 0);
};
// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.reduce((count, number) => number < 0 ? count + 1 : count, 0);
};
// console.log(countNegativeNumbers([1, -2, 3, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return numbers.reduce((sum, number) =>
    isOdd(number * number) ? sum : sum + number * number, 0);
};
// console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {
  return numbers.reduce((list, number) => [...list, number, number], []);
};
// console.log(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {
  return arrays.reduce((list, numbers) => {
    return [...list, numbers.map((number) => number)].flat();
  }, []);
};
// console.log(concatenateArrays([[1, 2], [3, 4], [5, 6]]));

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {
  return arrays.reduce((list, numbers) => {
    return [...list, numbers.map((number) => number)].flat();
  }, []);
};
// console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {
  return numbers.reduce((uniqueList, number) =>
    uniqueList.includes(number) ? uniqueList : [...uniqueList, number], []);
};

console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));