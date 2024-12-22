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

// console.log(doubleLettersOf(["cat", "dog", "bat"]));

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const domainNamesOf = function (emails) {
  return emails.map(function (email) {
    const sections = email.split("@");
    return sections.at(1);
  });
};

// console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map(function (string) {
    return string.split(" ");
  });
};

// console.log(splitWordsOf(["hello world", "goodbye moon"]));

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(function (array) { return array.join(""); });
};

// console.log(joinedArraysOf([["a", "b"], ["c", "d"]]));

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(function (word) { return word.repeat(2); });
};

// console.log(repeatedStringsOf(["hi", "bye"]));