// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) {
  return objects.map(function (person) { return person.name; });
};

// console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) {
  return objects.map(function (person) { return person.age; });
};

// console.log(extractAges([{ age: 25 }, { age: 30 }]));

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLettersOfNames = function (objects) {
  return objects.map(function (person) { return person.name.at(0); });
};

// console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const calculateAreas = function (rectangles) {
  return rectangles.map(function ({ width, height }) {
    return width * height;
  });
};

// console.log(calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]));

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (objects) {
  return objects.map(function ({ active }) { return active; });
};

// console.log(extractFlags([{ active: true }, { active: false }]));

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) {
  return objects.map(function ({ firstName, lastName }) {
    return firstName + " " + lastName;
  });
};

// console.log(fullNames([{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }]));

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrices = function (objects) {
  return objects.map(function ({ price, quantity }) {
    return price * quantity;
  });
};

// console.log(totalPrices([{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }]));

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) {
  return objects.map(function ({ age }) { return age >= 18; });
};

// console.log(isAdult([{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }]));

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const firstCharactersOf = function (strings) {
  return strings.map(function (word) { return word.at(0); });
};

const getAbbreviated = function ({ city, country }) {
  const strings = city.split(" ");
  const abbreviatedCity = firstCharactersOf(strings).join("");

  return abbreviatedCity + " " + country;
};

const abbreviations = function (objects) {
  return objects.map(getAbbreviated);
};

// console.log(abbreviations([{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }]));

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) {
  return objects.map(function ({ scores }) {
    return scores.math;
  });
};

// console.log(mathScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) {
  return objects.map(function ({ x, y }) { return [x, y]; });
};

// console.log(extractCoordinates([{ x: 1, y: 2 }, { x: 3, y: 4 }]));

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) {
  return objects.map(function ({ firstName, lastName, age }) {
    const fullName = firstName + " " + lastName;
    return [fullName, age];
  });
};

// console.log(fullNameAndAge([{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }]));

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) {
  return objects.map(function ({ scores }) {
    return [scores.math, scores.english];
  });
};

// console.log(extractScores([{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }]));

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) {
  return objects.map(function ({ key, value }) { return [key, value]; });
};

// console.log(keyValuePairs([{ key: "a", value: 1 }, { key: "b", value: 2 }]));

// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (objects) {
  return objects.map(function ({ name }) {
    return name.split(" ");
  });
};

// console.log(splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]));

// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]
const normalizeScores = function (objects) {
  return objects.map(function ({ score }) { return score / 100; });
};

console.log(normalizeScores([{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }]));