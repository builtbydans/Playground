/*
Challenge 2 – Objects & Array Methods

Fix the broken code below so that it returns an array of names of users who are over 18 and verified.
*/

const users = [
  { name: "Anna", age: 17, verified: true },
  { name: "Ben", age: 22, verified: false },
  { name: "Cara", age: 25, verified: true },
];

// broken
const result = users
  .filter((u) => u.age > 18 && u.verified)
  .map((user) => user.name);

console.log(result); // should output ["Cara"]
