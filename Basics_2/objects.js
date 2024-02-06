// const mySymb = Symbol("key1");

// const user = {
//   fname: "subham",
//   lname: "Bhandari",
//   age: 18,
//   log: true,
//   skills: ["read", "write", "listen"],
//   [mySymb]: "mykey1",
// };

// console.log(user.fname);
// console.log(user["lname"]); // we can use this also to access object and its keys and "" is necessary
// //                          //because keys are recognized by the system as a string

// console.log(user[mySymb]);

// user.fname = "utsav";
// console.log(user);

// // Object.freeze(user); //After this method is called an objects(user) values cant be updated
// user.lname = "karki";
// console.log(user);

// user.greeting = function () {
//   console.log(`Hello, ${user.fname} ${user.lname}`);
// };

// console.log(user);
// console.log(user.greeting());

// const user2 = {
//   name: "Subham",
//   age: "20",
//   greet: function () {
//     console.log("haha");
//   },
// };

// console.log(user2);
// console.log(user2.greet());

// //====================================================================================

// // Using let to declare an object
// let user = {
//   name: "Alice",
//   age: 25,
// };

// console.log("Initial user:", user);

// // Reassigning the entire object to a new one
// user = {
//   name: "Bob",
//   age: 30,
// };

// console.log("Reassigned user:", user);
// //The above cannot be done to object declared using const only properties of the object can be reassigned.

// //====================================================================================================

// const user = new Object(); //creating a singleton object

// user.name = "subham";

// console.log(user);

// // =============================================================================================

// const regularName = {
//   name: "subham",
//   info: {
//     sname: "subham",
//     lname: "bhandari", /////nested objects and we ca keep nesting it
//     moreInfo: {
//       gender: "male",
//     },
//   },
// };

// console.log(regularName);
// console.log(regularName.info);
// console.log(regularName.info.moreInfo);

// //===============================================================================================

// const obj1 = {
//   1: "a",
//   2: "b",
// };

// const obj2 = {
//   3: "c",
//   4: "d",
// };

// const obj3 = { obj1, obj2 }; // here it will just make obj1 and obj2 as its properties
// console.table(obj3);

// const obj4 = Object.assign({}, obj1, obj2); //here it will properly merge them and need to add {} if you dont wanna make any object as target.
// console.table(obj4);

// const objA = {
//   1: "a",
//   2: "b",
// };

// const objB = {
//   3: "c",
//   4: "d",
// };

// const objC = { ...objA, ...objB }; //spread operator
// console.log(objC);

// //===========================================================================================

// const arr = [
//   {
//     id: "1",
//     name: "subham",
//   },
//   {
//     id: "2",
//     name: "subham",
//   },
//   {
//     id: "3",
//     name: "subham",
//   },
//   {
//     id: "4",
//     name: "subham",
//   },
//   {
//     id: "5",
//     name: "subham",
//   },
//   {
//     email: "bahnad@gmail.com",
//   },
// ];

// console.table(arr);
// console.log(arr);

// console.log(arr[0].name, arr[0].id);
// console.log(`His name is ${arr[0].name} and his id is ${arr[0].id}`);

// //==========================================================================================

const user = {
  name: "subham",
  age: 20,
  logged: true,
};

const keysArr = Object.keys(user); // creates an array with all keys as its elements
console.log(keysArr);
// console.log(Object.keys(user));

console.log(Object.values(user)); // same but for values
console.log(Object.entries(user)); // creates arrays for all properties with key and value which are all inside an array

console.log(user.hasOwnProperty("name")); //Checks if there is a property
