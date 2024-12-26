// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((string, word) => string + word, "");
};
// console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce((longestString, word) =>
    longestString.length < word.length ? word : longestString, "");
};
// console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce((shortestString, word) =>
    shortestString.length > word.length ? word : shortestString);
};
// console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.reduce((string, word) => string + "," + word);
};
// console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reduce((string, word) => word + " " + string);
};
// console.log(reverseWords(["hello", "world"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce((string, word) => string + " " + word);
};
// console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce((string, name) => string + name);
};
// console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) {
  return words.reduce((string, word) => {
    const vowels = "aeiouAEIOU";
    const letters = word.split("");

    return letters.reduce((vowelString, letter) =>
      vowels.includes(letter) ? vowelString + letter : vowelString, string);
  }, "");
};
// console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {
  return words.reduce((string, word) =>
    string + word.at(0).toUpperCase() + word.substring(1, word.length));

};
// console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverse = (word) => {
  const letters = word.split("");
  return letters.reverse().join("");
};
const reverseString = function (words) {
  return words.reduce((string, word) => string + reverse(word), "");
};
console.log(reverseString(["apple", "banana", "cherry"]));
