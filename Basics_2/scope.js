// if (true) {
//   let a = 1;
//   const b = 2;
//   var c = 3;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// try {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// } catch {
//   console.log("Error");
// } finally {
//   console.log("Finally!");
// }

//Nested scope
function one() {
  let name = "subham";
  let age = 20;
  console.log(`My name is ${name} and my age is ${age}.`);
  function two() {
    console.log(`Maa name is ${name} and maa age is ${age}.`); //example of nested scope where child function can access local variable in parent function.
  }
  two();
}
one();

// functions can also be declared as:-

// haha(3); //here it will not work because for calling a function created like below, function call should be below the function defination like in C this condition is related to hoisting so be sure to learn that in depth.
const haha = function (num) {
  console.log(`Haha you are ${num}nd.`); //Functoinscan also be created/declared like this
};

haha(2);
