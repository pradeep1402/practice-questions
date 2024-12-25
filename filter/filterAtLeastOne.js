
// console.log(filterCandidatesByExperienceAndSkills([{ skills: { languages: ["JavaScript", "Python"] }, experience: { years: 5 } }], 5, ["JavaScript", "Python"]));

// Filter products where one of the reviews has a rating above a threshold [{name: "Laptop", reviews: [{rating: 4.5}, {rating: 3.2}]}] => [{name: "Laptop", reviews: [{rating: 4.5}, {rating: 3.2}]}]
const filterProductsByReviewRating = function (products, minRating) {
  return products.filter(product => product.reviews.some(({ rating }) => rating > minRating));
};

// console.log(filterProductsByReviewRating([{ name: "Laptop", reviews: [{ rating: 4.5 }, { rating: 3.2 }] }, { name: "PC", reviews: [{ rating: 3.9 }, { rating: 3.2 }] }], 3.9));

// Filter orders where one of the items is below a certain price [{order: {items: [{product: "Shirt", price: 25}, {product: "Shoes", price: 50}]}}] => [{order: {items: [{product: "Shirt", price: 25}, {product: "Shoes", price: 50}]}}]
const filterOrdersByItemPrice = function (orders, maxPrice) {
  return orders.filter(({ order }) => order.items
    .some(({ price }) => price < maxPrice));
};

// console.log(filterOrdersByItemPrice([
//   { order: { items: [{ product: "Shirt", price: 25 }, { product: "Shoes", price: 50 }] } },
//   { order: { items: [{ product: "T-Shirt", price: 120 }, { product: "Ring", price: 50 }] } }
// ], 40));

// Similar
// Filter events where at least one speaker is a particular person [{event: {name: "Tech Talk", speakers: [{name: "John"}, {name: "Alice"}]}}] => [{event: {name: "Tech Talk", speakers: [{name: "John"}, {name: "Alice"}]}}]
const filterEventsBySpeaker = function (events, speakerName) { };

// Filter students where at least one class has a passing grade [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}] => [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}]
const filterStudentsByClassGrade = function (students, passingGrade) { };

// Filter employees where at least one project has been completed [{employee: {name: "Alice", projects: [{name: "Project X", completed: true}, {name: "Project Y", completed: false}]}}] => [{employee: {name: "Alice", projects: [{name: "Project X", completed: true}, {name: "Project Y", completed: false}]}}]
const filterEmployeesByCompletedProject = function (employees) { };

// Filter courses where at least one module has been completed [{course: {title: "JavaScript 101", modules: [{name: "Intro", completed: true}, {name: "Advanced", completed: false}]}}] => [{course: {title: "JavaScript 101", modules: [{name: "Intro", completed: true}, {name: "Advanced", completed: false}]}}]
const filterCoursesByCompletedModule = function (courses) { };
