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
const reverseString = function (word) {
  let reversedWord = '';

  for (let index = 0; index < word.length; index++) {
    reversedWord = word[index] + reversedWord;
  }

  return reversedWord;
};

const reversedStringsOf = function (strings) {
  return strings.map(function (word) { return reverseString(word); });
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

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const vowels = ['a', 'e', 'i', 'o', 'u'];

const countVowel = function ([...letters]) {
  let count = 0;

  for (const letter of letters) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
};

const countVowelsOf = function (strings) {
  return strings.map(countVowel);
};

// console.log(countVowelsOf(["apple", "banana", "grape"]));

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const removeVowels = function ([...letters]) {
  let word = '';

  for (const letter of letters) {
    if (!vowels.includes(letter)) {
      word += letter;
    }
  }

  return word;
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

// console.log(withoutVowelsOf(["apple", "banana", "grape"]));

// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reverseArrayOfString = function (string) {
  const words = string.split(" ");
  const reversedWords = [];

  for (const word of words) {
    reversedWords.push(reverseString(word));
  }

  return reversedWords.join(" ");
};
const reversedWordsOf = function (strings) {
  return strings.map(reverseArrayOfString);
};

// console.log(reversedWordsOf(["hello world", "goodbye moon"]));

// extract unique characters from ["apple", "banana", "grape"] => ["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string
const getUniqueLetters = function ([...letters]) {
  let uniqueLetterString = '';

  for (const letter of letters) {
    if (!uniqueLetterString.includes(letter)) {
      uniqueLetterString += letter;
    }
  }

  return uniqueLetterString;
};

const uniqueCharactersOf = function (strings) {
  return strings.map(getUniqueLetters);
};

// console.log(uniqueCharactersOf(["apple", "banana", "grape"]));

// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const getFirstLetterCapital = function ([firstLetter, ...letters]) {
  return [firstLetter.toUpperCase(), ...letters].join("");
};

const getTitleWord = function (string) {
  const words = string.split(" ");
  const pascalCase = [];

  for (const word of words) {
    pascalCase.push(getFirstLetterCapital(word));
  }

  return pascalCase.join(" ");
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(getTitleWord);
};

// console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const getWordsLength = function (string) {
  const words = string.split(" ");

  return lengthsOf(words);
};

const wordLengthsOf = function (strings) {
  return strings.map(getWordsLength);
};

// console.log(wordLengthsOf(["apple pie", "banana split"]));

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const getSortedLettersWord = function ([...letters]) {
  return letters.sort().join("");
};

const sortedLettersOf = function (strings) {
  return strings.map(getSortedLettersWord);
};

// console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrappedWithDoubleQuotes = function (string) {
  return "[" + string + "]";;
};

const wrappedStringsOf = function (strings) {
  return strings.map(wrappedWithDoubleQuotes);
};

// console.log(wrappedStringsOf(["apple", "banana"]));

// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)
const getMaxLength = function (maxLength, string) {
  return maxLength >= string.length ? maxLength : string.length;
};

const normalizeStringLengths = function (strings) {
  const maxLength = strings.reduce(getMaxLength, 0);

  return strings.map(function (string) { return string.padEnd(maxLength); });
};

// console.log(normalizeStringLengths(["cat", "elephant", "dog"]));

// normalize strings by centering them based on the longest string length in ["cat", "elephant", "dog"] => ["  cat   ", "elephant", "  dog   "]
// (pad with spaces to justify to the center)
const centerJustifyStrings = function (strings) {
  const maxLength = strings.reduce(getMaxLength, 0);

  return strings.map(function (word) {
    const spacesCount = Math.floor((maxLength - word.length) / 2);
    const string = word.padStart(word.length + spacesCount)

    return string.padEnd(string.length + spacesCount);
  });
};

console.log(centerJustifyStrings(["cat", "elephant", "dog"]));