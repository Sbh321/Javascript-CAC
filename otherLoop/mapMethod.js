const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((brr) => brr + 10);

console.log(newArr);

//Chaining of methods

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newNums);

//reduce method

const arre = [1, 2, 3, 4];

iniValue = 0;

const reducedArre = arre.reduce(
  (accumuator, currentValue) => accumuator + currentValue, //To find sum of an array
  iniValue
);
console.log(reducedArre);

const arri = [1, 2, 3, 4];

const reducedArri = arri.reduce((accumuator, currentValue) => {
  return accumuator * currentValue; //To find product of an array
}, 1);
console.log(reducedArri);
