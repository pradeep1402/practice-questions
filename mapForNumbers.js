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

console.log(charCodesOf(["a", "b", "c"]));