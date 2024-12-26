// Filter strings from the first array that appear in the second array
// Input: ["apple", "banana", "cherry"], ["banana", "cherry", "date"]
// Output: ["banana", "cherry"]
const filterStringsByMembership = function (strings, criteria) {
  return strings.filter(string => criteria.includes(string));
};

// console.log(filterStringsByMembership(["apple", "banana", "cherry"], ["banana", "cherry", "date"]));

// Filter objects from the first array where the 'id' property is present in the second array
// Input: [{id: 1, name: "apple"}, {id: 2, name: "banana"}], [1, 3]
// Output: [{id: 1, name: "apple"}]
const filterObjectsById = function (objects, ids) {
  return objects.filter(({ id }) => ids.includes(id));
};

// console.log(filterObjectsById([{ id: 1, name: "apple" }, { id: 2, name: "banana" }], [1, 3]));

// Filter strings from the first array that have a length greater than a specified value and are present in the second array
// Input: ["apple", "banana", "cherry"], ["banana", "date"], length: 5
// Output: ["banana"]
const filterStringsByLengthAndMembership = function (strings, criteria, length) {
  return strings
    .filter(string => criteria.includes(string) && string.length > length);
};

// console.log(filterStringsByLengthAndMembership(["apple", "banana", "cherry"], ["banana", "date"], 5));

// Filter objects from the first array that contain properties in the second array
// Input: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}], ["color"]
// Output: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}]
const filterObjectsByProperties = function (objects, properties) {
  return objects.filter(object => properties.every(property => property in object));
};

// console.log(filterObjectsByProperties([{ name: "apple", color: "red" }, { name: "banana", color: "yellow" }], ["color"]));

// Filter strings from the first array where the substring exists in the second array
// Input: ["hello", "world", "hell", "how"], ["hell", "hello"]
// Output: ["hello", "hell"]
const filterStringsBySubstringMembership = function (strings, criteria) {
  return strings
    .filter(string => criteria.some(subString => string.includes(subString)));
};

// console.log(filterStringsBySubstringMembership(["hello", "world", "hell", "how"], ["hell", "hello"]));

// Find countries that exist based on a lookup object with country names as keys and existence status as values.
// Input: ["India", "USA", "Iran"], { "India": "exists", "USA": "does not exist", "Iran": "exists" }
// Output: ["India", "Iran"]
const findCountriesThatExist = function (countries, lookup) {
  return countries.filter(country => lookup[country] === "exists");
};

// console.log(findCountriesThatExist(["India", "USA", "Iran"], { "India": "exists", "USA": "does not exist", "Iran": "exists" }));

// Find users whose account status is 'active' from the lookup object.
// Input: ["Alice", "Bob", "Charlie"], { "Alice": { status: "active" }, "Bob": { status: "inactive" }, "Charlie": { status: "active" } }
// Output: ["Alice", "Charlie"]
const findActiveUsers = function (users, lookup) {
  return users.filter(user => lookup[user].status === "active");
};

// console.log(findActiveUsers(["Alice", "Bob", "Charlie"], { "Alice": { status: "active" }, "Bob": { status: "inactive" }, "Charlie": { status: "active" } }));

// Find strings where the length of the string is greater than the corresponding numeric threshold in the lookup object.
// Input: ["apple", "banana", "kiwi"], { "apple": 5, "banana": 5, "kiwi": 6 }
// Output: ["banana"]
const findStringsAboveThreshold = function (strings, lookup) {
  return strings.filter(string => lookup[string] < string.length);
};

// console.log(findStringsAboveThreshold(["apple", "banana", "kiwi"], { "apple": 5, "banana": 5, "kiwi": 6 }));

// Find the products whose price is less than a given threshold from the lookup object.
// Input: ["Laptop", "Phone", "Tablet"], { "Laptop": { price: 1000 }, "Phone": { price: 500 }, "Tablet": { price: 300 } }
// Output: ["Phone", "Tablet"]
const findAffordableProducts = function (products, lookup, threshold) {
  return products.filter(product => lookup[product].price < threshold);
};

// console.log(findAffordableProducts(["Laptop", "Phone", "Tablet"], { "Laptop": { price: 1000 }, "Phone": { price: 500 }, "Tablet": { price: 300 } }, 1000));

// Find students who have scored more than a given score in their exam from the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": 85, "Alice": 92, "Bob": 70 }
// Output: ["John", "Alice"]
const findHighScoringStudents = function (students, lookup, scoreThreshold) {
  return students.filter(student => lookup[student] > scoreThreshold);
};

// console.log(findHighScoringStudents(["John", "Alice", "Bob"], { "John": 85, "Alice": 92, "Bob": 70 }, 80));

// Find employees who have been at the company for more than 5 years based on the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": { yearsAtCompany: 6 }, "Alice": { yearsAtCompany: 4 }, "Bob": { yearsAtCompany: 7 } }
// Output: ["John", "Bob"]
const findLongTermEmployees = function (employees, lookup, threshold) {
  return employees
    .filter(employee => lookup[employee].yearsAtCompany > threshold);
};

// console.log(findLongTermEmployees(["John", "Alice", "Bob"], { "John": { yearsAtCompany: 6 }, "Alice": { yearsAtCompany: 4 }, "Bob": { yearsAtCompany: 7 } }, 5));

// Find cities with a population greater than a threshold provided in the lookup object.
// Input: ["London", "Paris", "Tokyo"], { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } }
// Output: ["London", "Tokyo"]
const findLargeCities = function (cities, lookup, threshold) {
  return cities.filter(city => lookup[city].population > threshold);
};

// console.log(findLargeCities(["London", "Paris", "Tokyo"], { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } }, 2500000));

// Find items in an inventory whose quantity is greater than 10 based on the lookup object.
// Input: ["item1", "item2", "item3"], { "item1": { quantity: 15 }, "item2": { quantity: 5 }, "item3": { quantity: 20 } }
// Output: ["item1", "item3"]
const findInStockItems = function (items, lookup, threshold) {
  return items.filter(item => lookup[item].quantity > threshold);
};

// console.log(findInStockItems(["item1", "item2", "item3"], { "item1": { quantity: 15 }, "item2": { quantity: 5 }, "item3": { quantity: 20 } }, 10));

// Find animals whose habitat matches the required type from the lookup object.
// Input: ["Lion", "Elephant", "Shark"], { "Lion": { habitat: "Jungle" }, "Elephant": { habitat: "Jungle" }, "Shark": { habitat: "Ocean" } } , "Jungle"
// Output: ["Lion", "Elephant"]
const findAnimalsByHabitat = function (animals, lookup, habitat) {
  return animals.filter(animal => lookup[animal].habitat === habitat);
};

console.log(findAnimalsByHabitat(["Lion", "Elephant", "Shark"], { "Lion": { habitat: "Jungle" }, "Elephant": { habitat: "Jungle" }, "Shark": { habitat: "Ocean" } }, "Jungle"));