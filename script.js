let itemPrice = 15.99;
let quantity = 3;
let totalCost = itemPrice * quantity;

console.log(`Total cost: $${totalCost.toFixed(2)}`);

totalCost -= 5;
console.log(`Total cost after discount: $${totalCost.toFixed(2)}`);

let tax = totalCost * 0.08;
totalCost += tax;

console.log(`Total cost after tax: $${totalCost.toFixed(2)}`);

document.getElementById("title").textContent = "Shopping Cart Total";
document.getElementById("finalAmount").textContent = `Final total after discount and tax: $${totalCost.toFixed(2)}`;
