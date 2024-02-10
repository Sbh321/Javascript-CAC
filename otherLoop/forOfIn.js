// const arr = [2, 2, 3, 4];
// for (const ar of arr) {
//   console.log(ar);
// }

// const str = "Subham Bhandari";
// for (const st of str) {
//   console.log(st);  // //for of loop
// }

// MAPs and to iterate in a Map using for of loop

const mp = new Map();

mp.set("Np", "Nepal");
mp.set("In", "India");

console.log(mp);

for (const key of mp) {
  console.log(key);
}

for (const [ke, val] of mp) {
  console.log(`${ke} - ${val}`);
}

// To iterate in an obeject we use for in loop

const ob = {
  Cn: "China",
  Mx: "Mexico",
};
for (const key in ob) {
  console.log(`${key} - ${ob[key]}`);
}
