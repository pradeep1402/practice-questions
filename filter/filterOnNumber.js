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

// console.log(filterGreaterThanThresholdByMembership([1, 2, 3, 4, 5], [2, 4, 6], 3));

// Filter numbers from the first array that fall within a range specified by a pair in the second array
// Input: [1, 2, 3, 4, 5], [2, 4]
// Output: [2, 3, 4]
const filterByRange = function (numbers, ranges) {
  return numbers.filter(function (number) {
    return ranges[0] <= number && ranges[1] >= number;
  });
};

// console.log(filterByRange([1, 2, 3, 4, 5], [2, 4]));

// Filter numbers from the first array that are present in the second array and are even ✅
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [2, 4]
const filterEvenNumbersByMembership = function (numbers, criteria) {
  return filterByMembership(numbers, criteria).filter(isEven);
};

// console.log(filterEvenNumbersByMembership([1, 2, 3, 4, 5], [2, 4, 6]));

// Find numbers that are marked as 'valid' in the lookup object.
// Input: [10, 20, 30, 40], {10: "valid", 20: "invalid", 30: "valid", 40: "valid"}
// Output: [10, 30, 40]
const findValidNumbers = function (numbers, lookup) {
  return numbers.filter(function (number) {
    return lookup[number] === "valid";
  });
};

// console.log(findValidNumbers([10, 20, 30, 40], { 10: "valid", 20: "invalid", 30: "valid", 40: "valid" }));

// Filter numbers from the first array that are not present in the second array
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [1, 3, 5]
const filterByExclusion = function (numbers, criteria) {
  return numbers.filter(function (number) {
    return !criteria.includes(number);
  });
};

console.log(filterByExclusion([1, 2, 3, 4, 5], [2, 4, 6]));