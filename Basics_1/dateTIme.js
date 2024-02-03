// let myDate = new Date();
// console.log(myDate.toString());

// console.log(myDate.getFullYear());
// console.log(myDate.getTime());

// let cusDate = new Date(2023, 11, 30);
// console.log(cusDate.toDateString());

// // =====================================================

// let timeDate = new Date(2023, 11, 30, 5, 30, 31);
// console.log(timeDate.toLocalString());

// // =======================================================

// let myStamp = Date.now();
// console.log(myStamp);

// //===========================================================

// let myDat = new Date("01-03-2023");
// console.log(myDat.toLocaleString());
// console.log(myDat.getFullYear());
// console.log(myDat.getMonth());
// console.log(myDat.getDay());
// console.log(myDat.getHours());

// //===================================================================

let haDate = new Date("2023-01-11");
console.log(
  haDate.toLocaleString("default", {
    weekday: "long",
  })
);
