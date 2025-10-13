const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");

// Function to calculate tip and total
function calculateTip() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  result.textContent = `Tip: RM${tip.toFixed(2)} | Total: RM${total.toFixed(2)}`;
}

// Enable button only if both inputs have values
function checkInputs() {
  button.disabled = !(billInput.value && tipInput.value);
}

// Event listeners
billInput.addEventListener("input", () => {
  checkInputs();
  if (billInput.value && tipInput.value) calculateTip(); // auto-update total
});

tipInput.addEventListener("input", () => {
  checkInputs();
  if (billInput.value && tipInput.value) calculateTip(); // auto-update total
});

button.addEventListener("click", calculateTip);
