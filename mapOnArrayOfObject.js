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

console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));