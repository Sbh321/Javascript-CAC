const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    if (event.target.id == "grey") {
      body.style.backgroundColor = "grey";
      body.style.transition = "0.2s";
      body.style.color = "white";
    }
  });
  btn.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    if (event.target.id == "white") {
      body.style.backgroundColor = "white";
      body.style.transition = "0.2s";
      body.style.color = "black";
    }
  });
  btn.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    if (event.target.id == "cyan") {
      body.style.backgroundColor = "cyan";
      body.style.transition = "0.2s";
      body.style.color = "white";
    }
  });
  btn.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    if (event.target.id == "yellow") {
      body.style.backgroundColor = "yellow";
      body.style.transition = "0.2s";
      body.style.color = "white";
    }
  });
});
v;
