// Get all the number buttons
let numberButtons = document.querySelectorAll(".numberButton");
let functionButtons = document.querySelectorAll(".functionButton");
// this section deals with displaying the value in displayInput
let displayInput = document.querySelector(".displayInput");
let inputDisplayValue = [];

// Add event listeners to each number button

function concatenateDisplayInputs() {
  let concatenatedDisplayValue = inputDisplayValue.join("");
  displayInput.textContent = concatenatedDisplayValue;
}
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the content of the button
    const buttonContent = button.textContent;
    inputDisplayValue.push(buttonContent);
    //runs a function that prints the called number concatenated and refreshes displayOutput
    concatenateDisplayInputs();
    //runs a function that stores actual value
  });
});

functionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the content of the button
    const buttonContent = button.textContent;
    inputDisplayValue.push(buttonContent);
    //runs a function that prints the called number concatenated and refreshes displayOutput
    concatenateDisplayInputs();
    //runs a function that stores actual value
  });
});

// this section onwards deals with calculating the actual value
let inputActualValues = [];

// creates a function that does the following:
//joins the inputs in inputActualValues into a string as concatenatedActualValue,
// converts it to an integer, pushes it into the array, clears numberValue
function concatenateStoredInputs() {
  let concatenatedActualValue = inputActualValues.join("");
  let numberValue = parseInt(concatenatedActualValue, 10); // Convert string to integer
  inputActualValues.push(numberValue);
  numberValue = null;
}
//when a functionbutton is pressed, run the above function
functionButton.forEach((button) => {
  button.addEventListener("click", concatenateStoredInputs);
});

//this section governs the arithmethic when equal is pressed.
