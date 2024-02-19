//Function that gererates RGB values converts them to HEX and returns both values in an object
function color() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let rgbString = `rgb(${red}, ${green}, ${blue})`;

  let hexCode =
    "#" +
    ("00" + red.toString(16)).slice(-2) +
    ("00" + green.toString(16)).slice(-2) +
    ("00" + blue.toString(16)).slice(-2);

  return { rgb: rgbString, hex: hexCode.toUpperCase() };
}

//Creating paragraph element where RGB and HEX values will be displyed
const p = document.querySelector("#values");
const textnode = document.createTextNode(``);
p.appendChild(textnode);

let hex, rgb;

//generate a random color per button click
document.querySelector("#generate").addEventListener("click", () => {
  const span = document.getElementById("colorCont");

  let randColor = color();

  console.log(randColor.hex);
  console.log(randColor.rgb);

  hex = randColor.hex;
  rgb = randColor.rgb;

  textnode.textContent = `RGB: ${randColor.rgb}  HEX: ${randColor.hex}`;

  span.style.backgroundColor = randColor.rgb;
});

//keep generating a rondom color after an interval when button is clicked
let intrv;
document.querySelector("#btn").addEventListener("click", () => {
  //if(intrv == null)  // this condition is needed to prevent inverval creation if one is already running
  if (!intrv) {
    intrv = setInterval(() => {
      const span = document.getElementById("colorCont");

      let randColor = color();
      console.log(randColor.hex);
      console.log(randColor.rgb);

      hex = randColor.hex;
      rgb = randColor.rgb;

      textnode.textContent = `RGB: ${randColor.rgb}  HEX: ${randColor.hex}`;

      span.style.backgroundColor = randColor.rgb;
    }, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intrv);
  intrv = null; //flushing the vaiable after clearInterval for efficiency
});

// code to save the generated color in the pallet
document.querySelector("#save").addEventListener("click", () => {
  const li1 = document.createElement("li");
  li1.setAttribute("li", "listElement");
  li1.style.marginBottom = "15px";

  const span1 = document.createElement("span");
  span1.setAttribute("id", "palette01");
  span1.style.backgroundColor = rgb;

  const p1 = document.createElement("p");
  p1.setAttribute("id", "colorValue");
  p1.innerHTML = `RGB: ${rgb} || HEX: ${hex}`;

  const button1 = document.createElement("button");
  button1.setAttribute("id", "deleteBtn");
  button1.setAttribute("class", "deleteBtnCls");
  button1.innerHTML = "Delete color";

  document.querySelector("#ulist").appendChild(li1);
  li1.appendChild(span1);
  li1.appendChild(p1);
  li1.appendChild(button1);
});

//removing colors form the palette
document.querySelector("#ulist").addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName == "BUTTON") {
    e.target.parentNode.remove();
  }
});

//removing all childs of ul(clearing the color palette
document.querySelector("#deletePalette").addEventListener("click", () => {
  let myList = document.getElementById("ulist");
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
});
