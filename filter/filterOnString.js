// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const filterLongWords = function (words) {
  return words.filter(function (word) { return word.length > 5; });
};

// console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));