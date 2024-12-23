// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAdults = function (people) {
  return people.filter(function ({ age }) { return age > 30; });
};

// console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const filterActiveUsers = function (users) {
  return users.filter(function ({ active }) { return active; });
};

// console.log(filterActiveUsers([{ username: "alice", active: true }, { username: "bob", active: false }]));

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) {
  return books.filter(function ({ pages }) { return pages > 200; });
};

// console.log(filterLongBooks([{ title: "Book 1", pages: 150 }, { title: "Book 2", pages: 250 }]));

// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles = function (users) {
  return users.filter(function ({ profileComplete }) {
    return !profileComplete;
  });
};

// console.log(filterIncompleteProfiles([{ username: "alice", profileComplete: true }, { username: "bob", profileComplete: false }]));

// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const filterHighGrades = function (students) {
  return students.filter(function ({ grade }) { return grade > 80; });
};

// console.log(filterHighGrades([{ name: "John", grade: 75 }, { name: "Jane", grade: 85 }]));

// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const filterInStockProducts = function (products) {
  return products.filter(function ({ inStock }) { return inStock; });
};

// console.log(filterInStockProducts([{ product: "apple", inStock: true }, { product: "banana", inStock: false }]));

// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const isDateInLast30Days = ({ orderDate }) => {
  const [year, month, day] = orderDate.split("-");
  const [todayYear, todayMonth, todayDay] = [2024, 12, 23];
  return (+year === todayYear && +month === todayMonth) ||
    (+todayDay + 30) - day < 30;
};

const filterRecentOrders = function (orders) {
  return orders.filter(isDateInLast30Days);
};

// console.log(filterRecentOrders([{ orderDate: "2024-11-01" }, { orderDate: "2024-12-01" }]));


// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]
const filterBelowAveragePrice = function (products) {
  const sum = products.reduce((sum, { price }) => { return price + sum; }, 0);
  const average = sum / products.length;

  return products.filter(({ price }) => price < average);
};

// console.log(filterBelowAveragePrice([{ name: "item1", price: 10 }, { name: "item2", price: 20 }, { name: "item3", price: 5 }]));

// active users who posted in the last 7 days [{username: "alice", lastPostDate: "2024-12-01", active: true}, {username: "bob", lastPostDate: "2024-11-20", active: true}] => [{username: "alice", lastPostDate: "2024-12-01", active: true}]
const isLastPostDateInLast7Day = ({ lastPostDate }) => {
  const [year, month, day] = lastPostDate.split("-");
  const [todayYear, todayMonth, todayDay] = [2024, 12, 23];
  return +year === todayYear && +month === todayMonth &&
    +todayDay - day < 7;
};

const filterRecentActiveUsers = function (users) {
  return users.filter(isLastPostDateInLast7Day);
};

// console.log(filterRecentActiveUsers([{ username: "alice", lastPostDate: "2024-12-19", active: true }, { username: "bob", lastPostDate: "2024-11-20", active: true }]));

// students who passed all subjects [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}, {name: "Jane", subjects: [{name: "Math", passed: false}, {name: "Science", passed: true}]}] => [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}]
const filterStudentsWithAllSubjectsPassed = function (students) {
  return students.filter(({ subjects }) => {
    return subjects[0].passed && subjects[1].passed;
  });
};

// console.log(filterStudentsWithAllSubjectsPassed([{ name: "John", subjects: [{ name: "Math", passed: true }, { name: "Science", passed: true }] }, { name: "Jane", subjects: [{ name: "Math", passed: false }, { name: "Science", passed: true }] }]));

// people whose birthday is this month [{name: "Alice", birthDate: "2024-12-01"}, {name: "Bob", birthDate: "2024-11-01"}] => [{name: "Alice", birthDate: "2024-12-01"}]
const bornOnThisMonth = ({ birthDate }) => {
  const [year, month] = birthDate.split("-");
  return +month === 12;
};

const filterBirthdaysThisMonth = function (people) {
  return people.filter(bornOnThisMonth);
};

// console.log(filterBirthdaysThisMonth([{ name: "Alice", birthDate: "2024-12-01" }, { name: "Bob", birthDate: "2024-11-01" }]));

// orders that exceed the average order value [{orderId: 1, amount: 20}, {orderId: 2, amount: 50}, {orderId: 3, amount: 10}] => [{orderId: 2, amount: 50}]
const filterHighValueOrders = function (orders) {
  const sumOfAmount = orders.reduce((sum, { amount }) => {
    return amount + sum;
  }, 0);
  const averageAmount = sumOfAmount / orders.length;

  return orders.filter(({ amount }) => amount > averageAmount);
};

// console.log(filterHighValueOrders([{ orderId: 1, amount: 20 }, { orderId: 2, amount: 50 }, { orderId: 3, amount: 10 }]));

// books with reviews higher than the average rating [{title: "Book 1", rating: 4}, {title: "Book 2", rating: 5}, {title: "Book 3", rating: 3}] => [{title: "Book 2", rating: 5}]
const filterTopRatedBooks = function (books) {
  const totalRating = books.reduce((sumOfPreRating, { rating }) => {
    return rating + sumOfPreRating;
  }, 0);
  const averageRating = totalRating / books.length;

  return books.filter(({ rating }) => rating > averageRating);
};

// console.log(filterTopRatedBooks([{ title: "Book 1", rating: 4 }, { title: "Book 2", rating: 5 }, { title: "Book 3", rating: 3 }]));

// employees whose salary is higher than the department average [{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"}, {name: "Charlie", salary: 4000, department: "IT"}] => [{name: "Bob", salary: 7000, department: "HR"}]
const filterHighSalaryEmployees = function (employees) {
  const personInADepartment = [0, 0];
  const departmentalSalaryTotal = employees.reduce((preDepartment, person) => {
    if (person.department === "HR") {
      preDepartment[0] += person.salary;
      personInADepartment[0] += 1;
      return preDepartment;
    }
    preDepartment[1] += person.salary;
    personInADepartment[1] += 1;
    return preDepartment;
  }, [0, 0]);

  const averageAmount = [departmentalSalaryTotal[0] / personInADepartment[0], departmentalSalaryTotal[1] / personInADepartment[1]];

  return employees.filter((person) => {
    if (person.department === "HR") {
      return averageAmount[0] < person.salary;
    }

    return averageAmount[1] < person.salary;
  });
};

// console.log(filterHighSalaryEmployees([{ name: "Alice", salary: 5000, department: "HR" }, { name: "Bob", salary: 7000, department: "HR" }, { name: "Charlie", salary: 4000, department: "IT" }]));

// cities with a population higher than the median [{name: "City A", population: 2000}, {name: "City B", population: 5000}, {name: "City C", population: 3000}] => [{name: "City B", population: 5000}]
const isEven = (number) => { number % 2 === 0; };

const findMedian = (numbers) => {
  if (isEven(numbers.length)) {
    const middleTermIndex = numbers.length / 2;

    return (numbers[middleTermIndex] + numbers[middleTermIndex + 1]) / 2;
  }

  return numbers[Math.ceil(numbers.length / 2)];
};

const filterCitiesAboveMedianPopulation = function (cities) {
  const median = findMedian(cities.map(({ population }) => population));

  return cities.filter(({ population }) => median < population);
};

// console.log(filterCitiesAboveMedianPopulation([{ name: "City A", population: 2000 }, { name: "City B", population: 5000 }, { name: "City C", population: 3000 }]));

// posts with more than the average number of likes [{postId: 1, likes: 100}, {postId: 2, likes: 200}, {postId: 3, likes: 150}] => [{postId: 2, likes: 200}]
const filterPopularPosts = function (posts) {
  const totalLikes = posts.reduce((totalLike, { likes }) => {
    return likes + totalLike;
  }, 0);
  const averageLikes = totalLikes / posts.length;

  return posts.filter(({ likes }) => averageLikes < likes);
};

console.log(filterPopularPosts([{ postId: 1, likes: 100 }, { postId: 2, likes: 200 }, { postId: 3, likes: 150 }]));