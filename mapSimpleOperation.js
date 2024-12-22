// squares of [1, 2, 3] => [1, 4, 9]
const squaresOf = function (numbers) {
  return numbers.map(function (number) { return number * number; });
};

// console.log(squaresOf([1, 2, 3]));

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthsOf = function (strings) {
  return strings.map(function (word) { return word.length; });
};

console.log(lengthsOf(["apple", "banana", "kiwi"]));