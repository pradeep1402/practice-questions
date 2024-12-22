// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthsOf = function (strings) {
  return strings.map(function (word) { return word.length; });
};

// console.log(lengthsOf(["apple", "banana", "kiwi"]));

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const uppercaseOf = function (strings) {
  return strings.map(function (word) { return word.toUpperCase(); });
};

// console.log(uppercaseOf(["hello", "world"]));

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharactersOf = function (strings) {
  return strings.map(function (word) { return word.at(0); });
};

// console.log(firstCharactersOf(["apple", "banana", "kiwi"]));

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reverse = function (word) {
  let reversedWord = '';

  for (let index = 0; index < word.length; index++) {
    reversedWord = word[index] + reversedWord;
  }

  return reversedWord;
};

const reversedStringsOf = function (strings) {
  return strings.map(function (word) { return reverse(word); });
};

// console.log(reversedStringsOf(["hello", "world"]));

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const doubleLetter = function (letters) {
  let newString = '';

  for (const letter of letters) {
    newString += letter.repeat(2);
  }

  return newString;
};

const doubleLettersOf = function (strings) {
  return strings.map(function (word) { return doubleLetter([...word]); });
};

console.log(doubleLettersOf(["cat", "dog", "bat"]));