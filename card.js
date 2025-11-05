// === SELECT INPUT ELEMENTS ===
const cardNumberInput = document.getElementById("cardnumber");
const cardHolderInput = document.getElementById("cardholder");
const expiryMonthInput = document.getElementById("expiry-month");
const expiryYearInput = document.getElementById("expiry-year");

// === CREATE LIVE DISPLAY ELEMENTS ===
const cardFront = document.querySelector(".card-front");

// live text elements
const liveNumber = document.createElement("div");
liveNumber.className = "live-number";
liveNumber.textContent = "1234 5678 9012 3456";

const liveName = document.createElement("div");
liveName.className = "live-name";
liveName.textContent = "JOHN DOE";

const liveExpiry = document.createElement("div");
liveExpiry.className = "live-expiry";
liveExpiry.textContent = "MM / YY";

// append them on the card front
cardFront.appendChild(liveNumber);
cardFront.appendChild(liveName);
cardFront.appendChild(liveExpiry);

// === FUNCTIONS ===

// Format card number into groups of 4 digits
function formatCardNumber(value) {
  return value
    .replace(/\D/g, "")
    .substring(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

// Update card number live
cardNumberInput.addEventListener("input", () => {
  const formatted = formatCardNumber(cardNumberInput.value);
  cardNumberInput.value = formatted;
  liveNumber.textContent = formatted || "1234 5678 9012 3456";
});

// Update cardholder name live
cardHolderInput.addEventListener("input", () => {
  const name = cardHolderInput.value.toUpperCase();
  liveName.textContent = name || "JOHN DOE";
});

// Update expiry date live
function updateExpiry() {
  const mm = expiryMonthInput.value.padEnd(2, "M");
  const yy = expiryYearInput.value.padEnd(2, "Y");
  li
