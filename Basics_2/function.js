function calc(...num1) {
  return num1;
}

console.log(calc(200, 500, 50, 25, 150));

function calc(num, num0, ...num1) {
  return num1;
}

console.log(calc(200, 500, 50, 25, 150));

//For passing object/object variable in a function as parameter we do folloing

const user = {
  name: "subham",
  age: 20,
};

function intro(anyobj) {
  return `My name is ${anyobj.name} and my age is ${anyobj.age}.`;
}

console.log(intro(user));

console.log(
  intro({
    name: "utsav", //or you can pass the object directly
    age: 21,
  })
);

//for array

const arr = ["Subham", 18];

function greet1(arra) {
  console.log(`His name is ${arra[0]} and his age is ${arra[1]}`);
}

greet1(arr);
