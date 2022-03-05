//Operator button binding
const divideBtn = document.getElementById('btnDivide');
const multiplyBtn = document.getElementById('btnMultiply');
const addBtn = document.getElementById('btnAdd');
const subtractBtn = document.getElementById('btnSubtract');
const equalBtn = document.getElementById('btnEqual');
const number = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
//GUI
const result = document.getElementById('result');
const display = document.getElementById('input');
const currentResultOutput = document.getElementById('result');
const currentCalculationOutput = document.getElementById('input');

//stores user input for numbers and stores value in currentResult.
const userNumber = number.forEach((i) =>
  i.addEventListener('click', (e) => {
    secondInput += e.currentTarget.value;
    // display.textContent += e.currentTarget.value;
  })
);

//stores user input for operators and stores value in currentResult.
const userOperator = operators.forEach((i) =>
  i.addEventListener('click', (e) => {
    currentOperator = e.currentTarget.value;
    firstInput = secondInput;
    secondInput = 0;
    getSum();
    // display.textContent += e.currentTarget.value;
  })
);
