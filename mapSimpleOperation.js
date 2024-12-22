const squaresOf = function (numbers) {
  return numbers.map(function (number) { return number * number; });
};

console.log(squaresOf([1, 2, 3]));