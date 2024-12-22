// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (number) {
  return number % 2 === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

// console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(function (number) { return number > 10; });
};

// console.log(filterNumbersGreaterThanTen([5, 12, 7, 18, 3]));

// Filter numbers from the first array that are present in the second array
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [2, 4]
const filterByMembership = function (numbers, criteria) {
  return numbers.filter(function (number) {
    return criteria.includes(number);
  });
};

// console.log(filterByMembership([1, 2, 3, 4, 5], [2, 4, 6]));

// Filter numbers from the first array that are found in the second array, and greater than a specific threshold
// Input: [1, 2, 3, 4, 5], [2, 4, 6], threshold: 3
// Output: [4]
const filterGreaterThanThresholdByMembership = function (numbers, criteria,
  threshold) {
  return filterByMembership(numbers, criteria).filter(function (number) {
    return number > threshold;
  });
};

console.log(filterGreaterThanThresholdByMembership([1, 2, 3, 4, 5], [2, 4, 6], 3));