let randNum = parseInt(Math.random() * 100 + 1);

console.log(randNum);

const submitBtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const prevGuesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const low0rHi = document.querySelector(".low0rHi");
const startOver = document.querySelector("#stats");

const butt = document.createElement("button");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const userGuess = parseInt(userInput.value);
    console.log(userGuess);
    validateGuess(userGuess);
  });
}

//To know if guess entered by user is between 1 and 100
function validateGuess(userGuess) {
  if (isNaN(userGuess)) {
    alert("Please enter a valid number!");
  } else if (userGuess < 1) {
    alert("Please guess a number more than 1");
  } else if (userGuess > 100) {
    alert("Please guess a number less than 100");
  } else {
    prevGuess.push(userGuess);
    if (numGuess === 6) {
      displayGuess(userGuess);
      displayMessage(`Game over!!! Random number was ${randNum}`);
      endGame();
    } else {
      displayGuess(userGuess);
      checkGuess(userGuess);
    }
  }
}

function checkGuess(userGuess) {
  if (userGuess === randNum) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (userGuess > randNum) {
    displayMessage(`Guessed number in too high!`);
  } else if (userGuess < randNum) {
    displayMessage(`Guessed number is too low!`);
  }
}

function displayGuess(userGuess) {
  userInput.value = "";
  prevGuesses.innerHTML += ` ${userGuess}`;
  numGuess++;

  remaining.innerHTML = `${6 - numGuess}`;
}

function displayMessage(message) {
  low0rHi.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
  userInput.value = "";
  butt.id = "button";
  userInput.setAttribute("disabled", "");
  butt.innerHTML = "Re-start";
  startOver.appendChild(butt);
  playGame = false;

  newGame();
}

function newGame() {
  const newButt = document.querySelector("#button");
  newButt.addEventListener("click", (event) => {
    randNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    prevGuesses.innerHTML = "";
    remaining.innerHTML = `${6 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(butt);
    low0rHi.innerHTML = "";

    playGame = true;
  });
}
