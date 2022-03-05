const startingNumber = 0;
let firstInput = startingNumber;
let secondInput = 0;
let calcOutput = 0;
let currentOperator = '';

//This will call proper function depending on which operator is selected and get the sum of the numbers entered
function operatorAssignment() {
  return currentOperator == '+'
    ? add()
    : currentOperator == '-'
    ? subtraction()
    : currentOperator == '*'
    ? multiply()
    : divide();
}

function add() {
  calcOutput += +secondInput;
}

function subtraction() {
  return calcOutput !== 0
    ? (calcOutput -= +secondInput)
    : (calcOutput = +firstInput - +secondInput);
}

function divide() {
  return calcOutput !== 0
    ? (calcOutput /= +secondInput)
    : (calcOutput = +firstInput / +secondInput);
}

function multiply() {
  calcOutput *= secondInput;
}

function clearDisplay() {
  display.textContent = `${parseInt(firstInput)} ${parseInt(secondInput)}`;
}

function declareResult() {
  result.textContent = calcOutput;
}

//Reset the calculator
function resetCalc() {
  calcOutput = 0;
  firstInput = 0;
  secondInput = 0;
  currentOperator = '';
}

function getSum() {
  if (calcOutput == 0) {
    calcOutput = +firstInput;
    clearDisplay();
    declareResult();
  }
  operatorAssignment();
  clearDisplay();
  declareResult();
}

equalBtn.addEventListener('click', getSum);
// addBtn.addEventListener('click', add);
// multiplyBtn.addEventListener('click', multiply);
