// Filter job candidates based on years of experience and their skills [{skills: {languages: ["JavaScript", "Python"]}, experience: {years: 5}}] => [{skills: {languages: ["JavaScript", "Python"]}, experience: {years: 5}}]
const filterCandidatesByExperienceAndSkills = function (candidates, experienceThreshold, requiredSkills) {
  const sortedSkills = requiredSkills.sort();

  return candidates.filter(candidate => {
    const sortedCandidateSkills = candidate.skills.languages.sort();

    for (let index = 0; index < sortedCandidateSkills.length; index++) {
      if (!(sortedCandidateSkills[index] === sortedSkills[index])) {
        return false;
      }
    }

    return candidate.experience.years === experienceThreshold;
  });
};

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

// Filter events where at least one speaker is a particular person [{event: {name: "Tech Talk", speakers: [{name: "John"}, {name: "Alice"}]}}] => [{event: {name: "Tech Talk", speakers: [{name: "John"}, {name: "Alice"}]}}]
const filterEventsBySpeaker = function (events, speakerName) {
  return events
    .filter(program => {
      return program.event.speakers.some(({ name }) => name === speakerName);
    });
};

// console.log(filterEventsBySpeaker([{ event: { name: "Tech Talk", speakers: [{ name: "John" }, { name: "Alice" }] } }, { event: { name: "Tech Talk", speakers: [{ name: "John" }, { name: "Bob" }] } }], "Bob"));

// Filter students where at least one class has a passing grade [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}] => [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}]
const filterStudentsByClassGrade = function (students, passingGrade) {
  return students
    .filter(({ student }) => student.classes.every(({ grade }) => grade < passingGrade));
};

// console.log(filterStudentsByClassGrade([{ student: { name: "Tom", classes: [{ name: "Math", grade: "B" }, { name: "History", grade: "C" }] } }, { student: { name: "Tom", classes: [{ name: "Math", grade: "D" }, { name: "History", grade: "C" }] } }], "D"));

// Filter employees where at least one project has been completed [{employee: {name: "Alice", projects: [{name: "Project X", completed: true}, {name: "Project Y", completed: false}]}}] => [{employee: {name: "Alice", projects: [{name: "Project X", completed: true}, {name: "Project Y", completed: false}]}}]
const filterEmployeesByCompletedProject = function (employees) {
  return employees.filter(({ employee }) => employee.projects.some(({ completed }) => completed));
};

// console.log(filterEmployeesByCompletedProject([{ employee: { name: "Alice", projects: [{ name: "Project X", completed: true }, { name: "Project Y", completed: false }] } }, { employee: { name: "Bob", projects: [{ name: "Project X", completed: false }, { name: "Project Y", completed: true }] } }]));

// Filter courses where at least one module has been completed [{course: {title: "JavaScript 101", modules: [{name: "Intro", completed: true}, {name: "Advanced", completed: false}]}}] => [{course: {title: "JavaScript 101", modules: [{name: "Intro", completed: true}, {name: "Advanced", completed: false}]}}]
const filterCoursesByCompletedModule = function (courses) {
  return courses.filter(({ course }) => course.modules.some(({ completed }) => completed));
};

// console.log(filterCoursesByCompletedModule([{ course: { title: "JavaScript 101", modules: [{ name: "Intro", completed: true }, { name: "Advanced", completed: false }] } }]));

// Filter organizations where one of the branches has a high rating [{organization: {name: "Tech Co", branches: [{name: "NYC", rating: 4.5}, {name: "LA", rating: 3.8}]}}] => [{organization: {name: "Tech Co", branches: [{name: "NYC", rating: 4.5}, {name: "LA", rating: 3.8}]}}]
const filterOrganizationsByBranchRating = function (organizations, minRating) {
  return organizations.filter(({ organization }) => organization.branches.some(({ rating }) => rating > minRating));
};

// console.log(filterOrganizationsByBranchRating([{ organization: { name: "Tech Co", branches: [{ name: "NYC", rating: 4.5 }, { name: "LA", rating: 3.8 }] } }], 4));

// Filter candidates where at least one job experience is in a specific industry [{candidate: {name: "Alice", experiences: [{company: "Tech Inc", industry: "Software"}, {company: "Retail Corp", industry: "Retail"}]}}] => [{candidate: {name: "Alice", experiences: [{company: "Tech Inc", industry: "Software"}, {company: "Retail Corp", industry: "Retail"}]}}]
const filterCandidatesByIndustryExperience = function (candidates, industry) {
  return candidates.filter(({ candidate }) => candidate.experiences.some((exp) => exp.industry === industry));
};

// console.log(filterCandidatesByIndustryExperience([{ candidate: { name: "Alice", experiences: [{ company: "Tech Inc", industry: "Software" }, { company: "Retail Corp", industry: "Retail" }] } }], "Software"));

// Filter cars where at least one feature is electric [{car: {model: "Tesla", features: [{type: "electric", name: "autopilot"}, {type: "gas", name: "V6 engine"}]}}] => [{car: {model: "Tesla", features: [{type: "electric", name: "autopilot"}, {type: "gas", name: "V6 engine"}]}}]
const filterCarsByFeatureType = function (cars, featureType) {
  return cars.filter(({ car }) => car.features.some(({ type }) => type === featureType));
};

// console.log(filterCarsByFeatureType([{ car: { model: "Tesla", features: [{ type: "electric", name: "autopilot" }, { type: "gas", name: "V6 engine" }] } }], "electric"));

// Filter teams where at least one member has a specific skill [{team: {name: "Dev Team", members: [{name: "Alice", skills: ["JavaScript", "React"]}, {name: "Bob", skills: ["Python", "Django"]}]}}] => [{team: {name: "Dev Team", members: [{name: "Alice", skills: ["JavaScript", "React"]}, {name: "Bob", skills: ["Python", "Django"]}]}}]
const filterTeamsBySkill = function (teams, skill) {
  return teams.filter(({ team }) => team.members.some(({ skills }) => skills.includes(skill)));
};

// console.log(filterTeamsBySkill([{ team: { name: "Dev Team", members: [{ name: "Alice", skills: ["JavaScript", "React"] }, { name: "Bob", skills: ["Python", "Django"] }] } }], "React"));

// Filter students where at least one grade is above a certain threshold [{student: {name: "Tom", grades: [{subject: "Math", grade: 85}, {subject: "English", grade: 72}]}}] => [{student: {name: "Tom", grades: [{subject: "Math", grade: 85}, {subject: "English", grade: 72}]}}]
const filterStudentsByGrade = function (students, minGrade) {
  return students.filter(({ student }) => student.grades.some(({ grade }) => grade > minGrade));
};

// console.log(filterStudentsByGrade([{ student: { name: "Tom", grades: [{ subject: "Math", grade: 85 }, { subject: "English", grade: 72 }] } }], 72));

// Filter books where at least one author has won a specific award [{book: {title: "Book 1", authors: [{name: "Author A", awards: ["Pulitzer"]}, {name: "Author B", awards: ["Nobel"]}]}}] => [{book: {title: "Book 1", authors: [{name: "Author A", awards: ["Pulitzer"]}, {name: "Author B", awards: ["Nobel"]}]}}]
const filterBooksByAward = function (books, award) {
  return books.filter(({ book }) => book.authors.some((author) => author.awards.includes(award)));
};

// console.log(filterBooksByAward([{ book: { title: "Book 1", authors: [{ name: "Author A", awards: ["Pulitzer"] }, { name: "Author B", awards: ["Nobel"] }] } }], "Pulitzer"));

// Filter users where at least one post has more than a specific number of likes [{user: {name: "John", posts: [{title: "Post 1", likes: 150}, {title: "Post 2", likes: 20}]}}] => [{user: {name: "John", posts: [{title: "Post 1", likes: 150}, {title: "Post 2", likes: 20}]}}]
const filterUsersByPostLikes = function (users, minLikes) {
  return users.filter(({ user }) => user.posts.some(({ likes }) => likes > minLikes));
};

console.log(filterUsersByPostLikes([{ user: { name: "John", posts: [{ title: "Post 1", likes: 150 }, { title: "Post 2", likes: 20 }] } }], 100));

// Similar
// Filter cities where at least one attraction is in a specific category [{city: {name: "Paris", attractions: [{name: "Eiffel Tower", category: "landmark"}, {name: "Louvre", category: "museum"}]}}] => [{city: {name: "Paris", attractions: [{name: "Eiffel Tower", category: "landmark"}, {name: "Louvre", category: "museum"}]}}]
const filterCitiesByAttractionCategory = function (cities, category) { };

// Filter courses where at least one student is enrolled in more than one course [{course: {name: "JavaScript", students: [{name: "Tom", enrolledCourses: ["Math", "JavaScript"]}, {name: "Alice", enrolledCourses: ["JavaScript"]}]}}] => [{course: {name: "JavaScript", students: [{name: "Tom", enrolledCourses: ["Math", "JavaScript"]}, {name: "Alice", enrolledCourses: ["JavaScript"]}]}}]
const filterCoursesByMultipleEnrollments = function (courses) { };

// Filter restaurants where at least one menu item is vegetarian [{restaurant: {name: "Vegan Bistro", menu: [{item: "Tofu Stir Fry", type: "vegetarian"}, {item: "Chicken Salad", type: "non-vegetarian"}]}}] => [{restaurant: {name: "Vegan Bistro", menu: [{item: "Tofu Stir Fry", type: "vegetarian"}, {item: "Chicken Salad", type: "non-vegetarian"}]}}]
const filterRestaurantsByVegetarianMenuItem = function (restaurants) { };

// Filter employees where at least one project is high priority [{employee: {name: "Jane", projects: [{name: "Project A", priority: "high"}, {name: "Project B", priority: "low"}]}}] => [{employee: {name: "Jane", projects: [{name: "Project A", priority: "high"}, {name: "Project B", priority: "low"}]}}]
const filterEmployeesByHighPriorityProject = function (employees) { };

// Filter orders where at least one item is from a specific category [{order: {items: [{name: "Laptop", category: "Electronics"}, {name: "Shoes", category: "Apparel"}]}}] => [{order: {items: [{name: "Laptop", category: "Electronics"}, {name: "Shoes", category: "Apparel"}]}}]
const filterOrdersByCategory = function (orders, category) { };

// Filter events where at least one speaker has a specific expertise [{event: {name: "Tech Talk", speakers: [{name: "Alice", expertise: "AI"}, {name: "Bob", expertise: "Web Development"}]}}] => [{event: {name: "Tech Talk", speakers: [{name: "Alice", expertise: "AI"}, {name: "Bob", expertise: "Web Development"}]}}]
const filterEventsBySpeakerExpertise = function (events, expertise) { };

// Filter users who have at least one post with more than a certain number of comments [{user: {name: "John", posts: [{title: "Post 1", comments: 100}, {title: "Post 2", comments: 5}]}}] => [{user: {name: "John", posts: [{title: "Post 1", comments: 100}, {title: "Post 2", comments: 5}]}}]
const filterUsersByPostComments = function (users, minComments) { };

// Filter users who have at least one post in a specific category [{user: {name: "Anna", posts: [{title: "Post 1", category: "Food"}, {title: "Post 2", category: "Travel"}]}}] => [{user: {name: "Anna", posts: [{title: "Post 1", category: "Food"}, {title: "Post 2", category: "Travel"}]}}]
const filterUsersByPostCategory = function (users, category) { };

// Filter posts that have at least one hashtag from a list of trending hashtags [{post: {title: "Post 1", hashtags: ["#food", "#vegan"]}}] => [{post: {title: "Post 1", hashtags: ["#food", "#vegan"]}}]
const filterPostsByHashtags = function (posts, trendingHashtags) { };

// Filter users who have shared at least one post that received a specific number of likes [{user: {name: "Lucy", posts: [{title: "Post 1", likes: 500}, {title: "Post 2", likes: 100}]}}] => [{user: {name: "Lucy", posts: [{title: "Post 1", likes: 500}, {title: "Post 2", likes: 100}]}}]
const filterUsersByMinPostLikes = function (users, minLikes) { };

// Filter users who have at least one post where the caption contains a specific word [{user: {name: "Sara", posts: [{title: "Post 1", caption: "Amazing sunset!"}, {title: "Post 2", caption: "Another day, another adventure!"}]}}] => [{user: {name: "Sara", posts: [{title: "Post 1", caption: "Amazing sunset!"}, {title: "Post 2", caption: "Another day, another adventure!"}]}}]
const filterUsersByPostCaption = function (users, word) { };