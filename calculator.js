const startingNumber = 0;
let currentResult = startingNumber;

function userInput() {}

//This will call proper function depending on which operator is selected and get the sum of the numbers entered
function getSum() {}

//reset the calculator
function resetCalc() {}

function add() {
  currentResult += parseInt(display.value);
  outputResult(currentResult, '');
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function divide() {
  currentResult += display.value;
  return num1 / num2;
}

function multiply() {
  return num1 * num2;
}

divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtraction);
