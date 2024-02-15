// Get all the number buttons
let numberButtons = document.querySelectorAll(".numberButton");
let functionButtons = document.querySelectorAll(".functionButton");
// this section deals with displaying the value in displayInput
let displayInput = document.querySelector(".displayInput");
let displayOutput = document.querySelector(".displayOutput");
let inputActualValue = [];
let inputDisplayValue = [];

function concatenateDisplayInputs() {
  let concatenatedDisplayValue =
    inputDisplayValue.length > 0 ? inputDisplayValue.join("") : "0";
  displayInput.textContent = concatenatedDisplayValue;
}

// Add event listeners to each number button that when clicked pushes content into inputDisplayValue
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the content of the button
    const buttonContent = button.textContent;
    inputActualValue.push(buttonContent); // this stores the working array
    inputDisplayValue.push(buttonContent); //runs a function that prints the called number concatenated and refreshes displayOutput
    concatenateDisplayInputs();
    //runs a function that stores actual value
  });
});

// Add event listeners to each function button (technically dont need to? but better control)
functionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the content of the button
    const buttonContent = button.textContent;
    inputActualValue.push(buttonContent); // this stores the working array
    inputDisplayValue.push(buttonContent); //runs a function that prints the called number concatenated and refreshes displayOutput
    concatenateDisplayInputs();
    //runs a function that stores actual value
  });
});

const equalButton = document.querySelector(".equalButton");
equalButton.addEventListener("click", () => {
  // Add event listener to deal with the equal button
  // Concatenate the string elements to form a mathematical expression
  let expressionCalculation = inputActualValue.join("");
  // Evaluate the expression using eval() function
  const calculatedResult = eval(expressionCalculation);
  displayOutput.textContent = calculatedResult;
});

//this section is the reset button section
const button = document.querySelector(".resetButton");
button.addEventListener("click", () => {
  // add event listener to deal with resetting
  displayInput.textContent = null;
  displayOutput.textContent = null;
  inputActualValue = [];
  inputDisplayValue = [];
});

//this section is the backspace button section <, this still doesnt work, WHY o_o
const backspaceButton = document.querySelector(".buttonBackspace");
backspaceButton.addEventListener("click", () => {
  inputActualValue.pop();
  inputDisplayValue = inputActualValue.slice(); // update inputDisplayValue to match inputActualValue
  concatenateDisplayInputs();
});
