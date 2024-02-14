const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //prevents the default operation when we submit a form
  const height = parseInt(document.querySelector("#height").value); //we need to convert it into integer to peform calculation cause a string is returned from querySelector.value method
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height!";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight!";
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<h3>Results:</h3><span>${BMI}</span>`;
  }
});

//Also write down to know IF BMI is balanced underweight or overweight
