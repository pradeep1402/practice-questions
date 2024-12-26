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

// console.log(filterPopularPosts([{ postId: 1, likes: 100 }, { postId: 2, likes: 200 }, { postId: 3, likes: 150 }]));

// users who have posted more than the average number of posts [{username: "Alice", postCount: 5}, {username: "Bob", postCount: 8}, {username: "Charlie", postCount: 3}] => [{username: "Bob", postCount: 8}]
const filterActiveUsersByPostCount = function (users) {
  const totalPosts = users
    .reduce((totalPosts, { postCount }) => totalPosts + postCount, 0);
  const averagePosts = totalPosts / users.length;

  return users.filter(user => user.postCount > averagePosts);
};

// console.log(filterActiveUsersByPostCount([{ username: "Alice", postCount: 5 }, { username: "Bob", postCount: 8 }, { username: "Charlie", postCount: 3 }]));

// filter people older than a certain age [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 22}] => [{name: "Bob", age: 30}]
const filterByAge = function (people, age) {
  return people.filter((person) => person.age > age);
};

// console.log(filterByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 22 }], 25));

// filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) {
  return products.filter(product => product.price < price);
};

// console.log(filterByPrice([{ name: "item1", price: 20 }, { name: "item2", price: 50 }, { name: "item3", price: 10 }], 25));

// filter students who scored above a certain grade in Math [{name: "John", grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}] => [{name: "John", grades: {math: 80, science: 90}}]
const filterByMathGrade = function (students, grade) {
  return students.filter(student => student.grades.math > grade);
};

// console.log(filterByMathGrade([{ name: "John", grades: { math: 80, science: 90 } }, { name: "Jane", grades: { math: 70, science: 85 } }], 70));

// filter events that occur before a certain date [{name: "Event1", date: "2024-12-01"}, {name: "Event2", date: "2024-11-15"}] => [{name: "Event2", date: "2024-11-15"}]
const filterByDate = function (events, date) {
  const [filterYear, filterMonth, filterDay] = date.split("-");

  return events.filter(({ date }) => {
    const [year, month, day] = date.split("-");
    return filterYear >= year && filterMonth >= month && filterDay > day;
  });
};

// console.log(filterByDate([{ name: "Event1", date: "2024-12-01" }, { name: "Event2", date: "2024-11-15" }], "2024-12-01"));

// filter employees who earn more than a certain salary [{name: "Alice", salary: 5000}, {name: "Bob", salary: 7000}] => [{name: "Bob", salary: 7000}]
const filterBySalary = function (employees, salary) {
  return employees.filter(employee => employee.salary > salary);
};

// console.log(filterBySalary([{ name: "Alice", salary: 5000 }, { name: "Bob", salary: 7000 }], 5000));

// filter orders with a quantity greater than a given number [{orderId: 1, quantity: 10}, {orderId: 2, quantity: 5}] => [{orderId: 1, quantity: 10}]
const filterByQuantity = function (orders, quantity) {
  return orders.filter(order => order.quantity > quantity);
};

// console.log(filterByQuantity([{ orderId: 1, quantity: 10 }, { orderId: 2, quantity: 5 }], 5));

// filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) {
  return books.filter(book => book.year > year);
};

// console.log(filterByYear([{ title: "Book1", year: 2020 }, { title: "Book2", year: 2022 }], 2020));

// filter students with a grade higher than a given threshold in a specific subject [{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}] => [{name: "Alice", grades: {math: 90, science: 80}}]
const filterBySubjectGrade = function (students, subject, threshold) {
  return students.filter(({ grades }) => {
    return grades[subject] > threshold;
  });
};

// console.log(filterBySubjectGrade([{ name: "Alice", grades: { math: 90, science: 80 } }, { name: "Bob", grades: { math: 70, science: 85 } }], "math", 85));

// filter photos with a minimum number of likes [{id: 1, likes: 100}, {id: 2, likes: 50}] => [{id: 2, likes: 50}]
const filterByLikes = function (photos, likes) {
  return photos.filter((photo) => photo.likes === likes);
};

// console.log(filterByLikes([{ id: 1, likes: 100 }, { id: 2, likes: 50 }], 50));

// filter users who have made a certain number of posts [{username: "Alice", posts: 10}, {username: "Bob", posts: 5}] => [{username: "Alice", posts: 10}]
const filterByPostCount = function (users, postCount) {
  return users.filter((user) => user.posts === postCount);
};

// console.log(filterByPostCount([{ username: "Alice", posts: 10 }, { username: "Bob", posts: 5 }], 10));

// Apply a discount to each item's price, then filter for items under a certain price [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item2", price: 45}]
const filterDiscountedItems = function (items, discount, maxPrice) {
  return items
    .map(({ name, price }) => ({ name, price: price - (price * (discount / 100)) }))
    .filter(item => item.price < maxPrice);
};

// console.log(filterDiscountedItems([{ name: "item1", price: 100 }, { name: "item2", price: 50 }], 10, 50));

// Convert product names to uppercase, then filter for products with names longer than a certain number [{name: "apple"}, {name: "banana"}] => [{name: "banana"}]
const filterLongProductNames = function (products, minLength) {
  return products.filter(item => item.name.length > minLength);
};

// console.log(filterLongProductNames([{ name: "apple" }, { name: "banana" }], 5));

// Group users by their age, then filter for specific age groups [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAgeGroups = function (users, ageGroup) {
  return users.filter(user => user.age > ageGroup[0] && user.age < ageGroup[1]);
};

// console.log(filterAgeGroups([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }], [30, 40]));

// Convert grades to letter grades, then filter for students who passed [{name: "Alice", grade: 90}, {name: "Bob", grade: 55}] => [{name: "Alice", grade: 90}]
const filterPassingGrades = function (students, passingGrade) {
  return students.filter(student => student.grade > passingGrade);
};

// console.log(filterPassingGrades([{ name: "Alice", grade: 90 }, { name: "Bob", grade: 55 }], 60));

// Calculate VAT-inclusive prices, then filter for those over a certain threshold [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item1", price: 120}]
const filterHighPriceWithVAT = function (products, vatRate, threshold) {
  return products
    .map(({ name, price }) => ({ name, price: price + price * vatRate / 100 }))
    .filter(({ price }) => price > threshold);
};

// console.log(filterHighPriceWithVAT([{ name: "item1", price: 100 }, { name: "item2", price: 50 }], 20, 100));

// Calculate the length of each name, then filter for names longer than a given number [{name: "Alice"}, {name: "Bob"}] => [{name: "Alice"}]
const filterLongNames = function (people, minLength) {
  return people.filter(({ name }) => name.length > minLength);
};

// console.log(filterLongNames([{ name: "Alice" }, { name: "Bob" }], 3));

// Normalize scores to a standard range, then filter for students who passed [{name: "John", score: 50}, {name: "Jane", score: 80}] => [{name: "Jane", score: 80}]
const filterNormalizedScores = function (students, minScore) {
  return students.filter(({ score }) => score > minScore);
};

// console.log(filterNormalizedScores([{ name: "John", score: 50 }, { name: "Jane", score: 80 }], 60));

// Convert book publication dates, then filter for books published after a given year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterRecentBooks = function (books, yearThreshold) {
  return books.filter(({ year }) => year > yearThreshold);
};

// console.log(filterRecentBooks([{ title: "Book1", year: 2020 }, { title: "Book2", year: 2022 }], 2020));

// Count the number of posts for each user, then filter for users with more than a specific number of posts [{username: "Alice", posts: 100}, {username: "Bob", posts: 50}] => [{username: "Alice", posts: 100}]
const filterActivePosters = function (users, postThreshold) {
  return users.filter(({ posts }) => posts > postThreshold);
};

// console.log(filterActivePosters([{ username: "Alice", posts: 100 }, { username: "Bob", posts: 50 }], 50));

// Convert students' grades to letter grades, then filter for students who received a specific grade [{name: "Alice", grade: 90}, {name: "Bob", grade: 85}] => [{name: "Alice", grade: 90}]
const filterSpecificGrade = function (students, minGrade) {
  return students.filter(({ grade }) => grade > minGrade);
};

// console.log(filterSpecificGrade([{ name: "Alice", grade: 90 }, { name: "Bob", grade: 85 }], 85));


// Filter products based on category and price threshold [{category: {type: "electronics"}, name: "Laptop", price: 800}, {category: {type: "furniture"}, name: "Chair", price: 150}] => [{category: {type: "electronics"}, name: "Laptop", price: 800}]
const filterByCategoryAndPrice = function (products, category, maxPrice) {
  return products
    .filter(product => product.category.type === category && product.price > maxPrice);
};

// console.log(filterByCategoryAndPrice([{ category: { type: "electronics" }, name: "Laptop", price: 800 }, { category: { type: "furniture" }, name: "Chair", price: 150 }], "electronics", 600));

// Filter users based on their activity level and registration date [{profile: {username: "Alice", status: "active"}, registration: {date: "2020-05-01"}}] => [{profile: {username: "Alice", status: "active"}, registration: {date: "2020-05-01"}}]
const filterActiveUsersByDate = function (users, status, dateThreshold) {
  const [filterYear, filterMonth, filterDay] = dateThreshold.split("-");

  return users.filter(user => {
    const [year, month, day] = user.registration.date.split("-");
    return filterYear <= year && filterMonth <= month && filterDay <= day &&
      user.profile.status;
  });
};

// console.log(filterActiveUsersByDate([{ profile: { username: "Alice", status: "active" }, registration: { date: "2020-05-01" } }], "active", "2020-01-01"));


// Filter orders where the customer's balance is above a certain threshold and the order total is under a certain amount [{customer: {name: "Alice", balance: 1000}, order: {total: 200}}] => [{customer: {name: "Alice", balance: 1000}, order: {total: 200}}]
const filterOrdersByBalanceAndTotal = function (orders, balanceThreshold, totalThreshold) {
  return orders.filter(user => user.customer.balance >= balanceThreshold && user.order.total >= totalThreshold);
};

// console.log(filterOrdersByBalanceAndTotal([{ customer: { name: "Alice", balance: 1000 }, order: { total: 200 } }], 1000, 100));


// Filter articles based on author name and publish date [{author: {name: "Alice"}, content: "Article 1", publishDate: "2021-01-01"}] => [{author: {name: "Alice"}, content: "Article 1", publishDate: "2021-01-01"}]
const filterArticlesByAuthorAndDate = function (articles, authorName,
  dateThreshold) {
  const [thresholdYear, thresholdMonth, thresholdDay] = dateThreshold.split("-");
  return articles.filter(article => {
    const [year, month, day] = article.publishDate.split("-");

    const isPublicDateIsLast = year > thresholdYear ||
      (year === thresholdYear && month > thresholdMonth) ||
      (year === thresholdYear && month === thresholdMonth &&
        day >= thresholdDay);

    return article.author.name === authorName && isPublicDateIsLast;
  });
};

// console.log(filterArticlesByAuthorAndDate([{ author: { name: "Alice" }, content: "Article 1", publishDate: "2021-01-01" }], "Alice", "2021-01-01"));

// Filter courses by instructor name and course rating [{instructor: {name: "John"}, course: {rating: 4.5}}] => [{instructor: {name: "John"}, course: {rating: 4.5}}]
const filterCoursesByInstructorAndRating = function (courses, instructorName, ratingThreshold) {
  return courses.filter(course => course.instructor.name === instructorName && course.course.rating === ratingThreshold);
};

// console.log(filterCoursesByInstructorAndRating([{ instructor: { name: "John" }, course: { rating: 4.5 } }], "John", 4.5));

// Filter projects by team size and completion status [{team: {members: ["Alice", "Bob"], size: 2}, project: {completed: false}}] => [{team: {members: ["Alice", "Bob"], size: 2}, project: {completed: false}}]
const filterProjectsByTeamSizeAndStatus = function (projects, teamSizeThreshold, status) {
  return projects.filter(project => project.team.size === teamSizeThreshold && project.project.completed === status);
};

// console.log(filterProjectsByTeamSizeAndStatus([{ team: { members: ["Alice", "Bob"], size: 2 }, project: { completed: false } }], 2, false));


//Similar
// Filter events based on location and date [{location: {city: "New York"}, date: {eventDate: "2022-07-01"}}] => [{location: {city: "New York"}, date: {eventDate: "2022-07-01"}}]
const filterEventsByLocationAndDate = function (events, city, dateThreshold) { };

// Filter customers based on region and membership status [{region: {country: "USA", state: "California"}, membership: {status: "gold"}}] => [{region: {country: "USA", state: "California"}, membership: {status: "gold"}}]
const filterCustomersByRegionAndStatus = function (customers, region, status) { };

// Filter tasks based on assignee's role and priority level [{assignee: {role: "developer"}, task: {priority: "high"}}] => [{assignee: {role: "developer"}, task: {priority: "high"}}]
const filterTasksByRoleAndPriority = function (tasks, role, priorityLevel) { };

// Filter users who have a certain number of followers and have posted in the last 30 days [{user: {name: "Tom", followers: 1000, lastPostDate: "2024-11-10"}}] => [{user: {name: "Tom", followers: 1000, lastPostDate: "2024-11-10"}}]
const filterRecentlyActiveUsers = function (users, minFollowers, daysAgo) { };

// Filter posts that have a certain number of comments and are from a specific location [{post: {title: "Post 1", comments: 150, location: "Paris"}}] => [{post: {title: "Post 1", comments: 150, location: "Paris"}}]
const filterPostsByCommentsAndLocation = function (posts, minComments, location) { };

// Filter users who follow a certain number of accounts and have at least one post in the last week [{user: {name: "Jake", following: 200, lastPostDate: "2024-12-10"}}] => [{user: {name: "Jake", following: 200, lastPostDate: "2024-12-10"}}]
const filterUsersByFollowingAndRecentPosts = function (users, minFollowing, daysAgo) { };

// Filter posts from users who have more than a certain number of followers and at least one post with over a set number of comments [{post: {user: {name: "Chris", followers: 1200}, comments: 350}}] => [{post: {user: {name: "Chris", followers: 1200}, comments: 350}}]
const filterPostsByUserFollowersAndComments = function (posts, minFollowers, minComments) { };

// Filter users who have shared a post that has a specific hashtag and has been liked more than a set number [{user: {name: "Mia", posts: [{title: "Post 1", hashtags: ["#beach", "#sunset"], likes: 300}]}}] => [{user: {name: "Mia", posts: [{title: "Post 1", hashtags: ["#beach", "#sunset"], likes: 300}]}}]
const filterUsersByHashtagAndLikes = function (users, hashtag, minLikes) { };

//Not understandable but looks similar
// Filter teams where at least one member is from a specific department [{team: {name: "Dev Team", members: [{name: "Alice", department: "Engineering"}, {name: "Bob", department: "Marketing"}]}}] => [{team: {name: "Dev Team", members: [{name: "Alice", department: "Engineering"}, {name: "Bob", department: "Marketing"}]}}]
const filterTeamsByDepartment = function (teams, department) { };