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

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const countVowel = function (letters) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (const letter of letters) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
};

const countVowelsOf = function (strings) {
  return strings.map(function (word) { return countVowel([...word]); });
};

// console.log(countVowelsOf(["apple", "banana", "grape"]));

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map(function (numbers) { return numbers.reverse(); });
};

console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));