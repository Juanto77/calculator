const divideBtn = document.getElementById('btnDivide');
const multiplyBtn = document.getElementById('btnMultiply');
const addBtn = document.getElementById('btnAdd');
const subtractBtn = document.getElementById('btnSubtract');
const result = document.getElementById('result');
const display = document.getElementById('input');
const number = document.querySelectorAll('.number');

const currentResultOutput = document.getElementById('result');
const currentCalculationOutput = document.getElementById('input');

number.forEach((i) =>
  i.addEventListener('click', (e) => {
    display.textContent += e.currentTarget.value;
  })
);

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
