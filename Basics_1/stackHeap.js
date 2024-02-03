// let user1 = "subham";

// let user2 = user1;

// user2 = "Utsav";

// console.log(user1);
// console.log(user2);

let user1 = {
  name: "subham",
  age: 18,
};

let user2 = user1;

user2.name = "utsav";
user2.age = 20;

console.table(user1);
console.table(user2);
