(function hellO(name) {
  console.log(`Hallo!`); //Named IIFE
})("subham");

((name) => {
  console.log(`hallo!`); //Smple IFFE
})("Subham");

//Immediately Invoked Function Expression are commonly used for calling a function right after declaration to prevent the function form being polluted by global scope
//Semi coon at the end is important
