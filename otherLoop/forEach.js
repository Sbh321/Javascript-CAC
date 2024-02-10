//We use a call back function to interate in an array using forEach method
//A call back funtion doesnt need a name because its passed as an argument to another function.

const lang = ["Basic", "C", "HTML", "CSS", "JS", "PHP", "JAVA", "Python"];

lang.forEach(function (item) {
  console.log(item); //Using standard function declaration
});

lang.forEach((item) => {
  console.log(item); //Using arrow function
});

lang.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//Here arrow function is argument to the forEach method and item is argument to arrow function with takes parameters form lang array in each iteration

//Using forEach method using a reference to standard function declaration

function pp(val) {
  console.log(val);
}

lang.forEach(pp); // Using reference to standard function declaration

//------------------------------------------------------------------------------------
//Below process is used to iterate over a JSON file during handling Databases
const objArr = [
  {
    name: "Subham Bhandari",
    age: 20,
  },
  {
    name: "Utsav Karki",
    age: 21,
  },
  {
    name: "Dipesh Shrestha",
    age: 19,
  },
  {
    name: "Nijal Baka",
    age: 21,
  },
];

objArr.forEach((val) => {
  console.log(val);
  console.log(`Their name is ${val.name} and their age is ${val.age}`);
});

//Filter method

const aNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const bnum = aNum.filter((val) => val > 4); //here we dont need {} for the call back function because the defination is a single line and we dont need explicit return cause of that

const bcnum = aNum.filter((val) => {
  return val > 4;
});
//Doing same using for each
const cnum = [];
aNum.forEach((val) => {
  if (val > 4) {
    cnum.push(val); // here its a lenthy process than using a filter cause we have to declare an empty array object and also pop it if condition matches in iterations
  }
});
console.log(cnum);

console.log(bnum);
console.log(bcnum);

console.log(typeof bnum);

const haha = () => "haha!";
console.log(haha());
