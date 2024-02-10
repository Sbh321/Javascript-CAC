const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`); // to refer to a variable inside a method we have to provide context using this keyword and we can use a variable property of an object inside its function property
  },
};

user.welcomeMessage();

const haha = function () {
  let name = "Subham";
  console.log(`My name is ${name}`); //Anonymous function expression
};
haha();

function haha1() {
  let name = "Subham";
  console.log(`My name is ${name}`); //Standard function declaration
}
haha1();

const haha2 = () => {
  let name = "Subham";
  console.log(`My name is ${name}`); //arrow function
};
haha2();

const addTwo = (num1, num2) => num1 + num2; //We can pass parameters and write its defination like this too
console.log(addTwo(3, 4));

const sayHaha = (num1, num2) => console.log(`haha`);
sayHaha();

//Here in arrow function we dont have to write return code if statement is not inside braces or is inside a paranthesis
const add = () => 2 + 2;
console.log(add());

//but need to write return if statement is insede{}
const div = () => {
  return 2 - 1;
};
console.log(div());
