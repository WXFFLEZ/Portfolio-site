// 🍰 Bakery Game JavaScript

const possibleIngredients = [
  "Cupcake",
  "Cookie",
  "Donut",
  "Frosting",
  "Sprinkles",
  "Chocolate Chips",
  "Glaze"
];

let currentOrder = [];
let playerPlate = [];
let score = 0;

// Generate a random bakery order
function generateOrder() {
  currentOrder = [];
  const numItems = Math.floor(Math.random() * 3) + 2; // 2-4 items per order
  for (let i = 0; i < numItems; i++) {
    const item = possibleIngredients[Math.floor(Math.random() * possibleIngredients.length)];
    currentOrder.push(item);
  }
  document.getElementById("orderText").textContent = currentOrder.join(", ");
  playerPlate = [];
  document.getElementById("plate").innerHTML = "";
}

// Add ingredient to plate
function addIngredient(ingredient) {
  playerPlate.push(ingredient);
  const span = document.createElement("span");
  span.className = "ingredient";
  span.textContent = ingredient;
  document.getElementById("plate").appendChild(span);
}

// Check if the player's plate matches the order
function submitOrder() {
  if (arraysEqual(currentOrder, playerPlate)) {
    score += 10;
    alert("🎉 Delicious! Perfect order! +10 points");
  } else {
    alert("😢 Oops! The customer isn’t happy. Try again.");
  }
  document.getElementById("score").textContent = "Score: " + score;
  generateOrder();
}

// Helper: Compare two arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Start the first order
generateOrder();
