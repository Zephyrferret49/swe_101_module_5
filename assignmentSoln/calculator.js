// Get all the number buttons
const numberButtons = document.querySelectorAll(".numberButton");

// Add event listeners to each number button
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the content of the button
    const buttonContent = button.textContent;
  });
});

let inputValues = [];

// this part still needs editing
function addInputValue(value) {
  inputValues.push(value);
}

function removeInputValue(index) {
  inputValues.splice(index, 1);
}

function updateInputValue(index, newValue) {
  inputValues[index] = newValue;
}
