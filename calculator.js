const startingNumber = 0;
let firstInput = 0;
let secondInput = 0;
let calcOutput = 0;
let currentOperator = '';

function operate(operator, num1, num2) {
  operator = currentOperator;
  num1 = +firstInput;
  num2 = +secondInput;
  if (operator == '+') {
    calcOutput = num1 + num2;
  } else if (operator == '-') {
    calcOutput = num1 - num2;
  } else if (operator == '/' && num1 !== 0 && num2 !== 0) {
    calcOutput = num1 / num2;
  } else if (operator == '*') {
    calcOutput = num1 * num2;
  } else {
    alert('Not a Number');
  }
  firstInput = +calcOutput;
  result.textContent = calcOutput;
}

equalBtn.addEventListener('click', operate);
