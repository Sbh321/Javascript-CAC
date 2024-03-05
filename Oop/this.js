const user = {
  username: "Subham Bhandari",
  age: 20,
  log: true,

  userGreet: function () {
    console.log(this); //this stores the current context of the program?
    console.log(`Hello, This is ${this.username} age ${this.age}`); //need to use this to provide current context in an object
  },
};

user.userGreet();

console.log(this); //here this has the global context
//Here in node it gives an empty braces {} but doing same in browsers console will give window object with ton of properties and methods.

//-----------------------------------------------------------------------------------------------------

//constructor function
function user(username, age, isLoggedIn) {
  this.username = username;
  this.age = age;
  this.isLoggedIn = isLoggedIn;

  this.greetUser = function () {
    console.log(`Hello!, This is ${this.username}`);
  };

  return this; //Dont need to return as this in done implicitely
}

const user1 = new user("Subham Bhandari", 20, true);
console.log(user1.greetUser());
