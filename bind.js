//Button Binding
const divideBtn = document.getElementById('btnDivide');
const multiplyBtn = document.getElementById('btnMultiply');
const addBtn = document.getElementById('btnAdd');
const subtractBtn = document.getElementById('btnSubtract');
const equalBtn = document.getElementById('btnEqual');

//Display
const result = document.getElementById('result');
const display = document.getElementById('input');

//Number binding, click event listener & function
const number = document.querySelectorAll('.number');
number.forEach((i) =>
  i.addEventListener('click', (e) => {
    numberClick(e);
  })
);

//Operator Button Binding, Click event listener & function
const operators = document.querySelectorAll('.operator');
operators.forEach((i) =>
  i.addEventListener('click', (e) => {
    operatorClick(e);
  })
);

//Display Number & Operator Clicks
function numberClick(e) {
  secondInput += e.currentTarget.value;
  display.textContent += e.currentTarget.value;
}

function operatorClick(e) {
  currentOperator = e.currentTarget.value;
  display.textContent = e.currentTarget.value;
  operate();
  return calcOutput == 0 ? firstOperator() : continueOperation();
}

function firstOperator() {
  firstInput = +secondInput;
  secondInput = 0;
}

function continueOperation() {
  secondInput = 0;
}

function updateSum() {
  firstInput = +calcOutput;
  result.textContent = calcOutput;
}
