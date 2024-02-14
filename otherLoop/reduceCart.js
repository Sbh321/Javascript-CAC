const cart = [
  {
    itemName: "pant",
    itemPrice: 2000,
  },
  {
    itemName: "pencil",
    itemPrice: 250,
  },
  {
    itemName: "Sun glases",
    itemPrice: 1250,
  },
  {
    itemName: "lantern",
    itemPrice: 1500,
  },
  {
    itemName: "Coffee mug",
    itemPrice: 500,
  },
  {
    itemName: "Ear rings",
    itemPrice: 300,
  },
];

//Reducing the the prices of added items in the cart for total price:-

const totalPrice = cart.reduce(
  (accumuator, currentValue) => accumuator + currentValue.itemPrice,
  0
);

console.log(totalPrice);
