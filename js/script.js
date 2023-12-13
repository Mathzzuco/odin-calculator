const allNumbers = document.querySelectorAll(".num-btn");
const calculators = document.querySelectorAll(".cal-btn");
var num1 = -1;
var num2 = -1;
var operator;
var displayValue;

allNumbers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (num1 < 0) {
      num1 = e.target.innerHTML * 1;
      document.querySelector("span").innerHTML = num1;
      displayValue = num1;
      console.log(num1);
    } else {
      num1 = displayValue + e.target.innerHTML;
      displayValue = num1;
      num1 = num1 * 1;
      document.querySelector("span").innerHTML = displayValue;
      console.log(num1);
      return num1;
    }
  });
});

const addBtn = document.querySelector(".add-btn");
const subtractBtn = document.querySelector(".sub-btn");
const divideBtn = document.querySelector(".divide-btn");
const multiplyBtn = document.querySelector(".multiply-btn");

calculators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = e.target.innerHTML;
    if (operator === "+") {
      operator = 1;
    }
    if (operator === "-") {
      operator = 2;
    }
    if (operator === "÷") {
      operator = 3;
    }
    if (operator === "*") {
      operator = 4;
    }
  });
});

function add() {
  num1 + num2;
}

function subtract() {
  num1 - num2;
}

function multiply() {
  num1 * num2;
}

function divide() {
  num1 / num2;
}

function clear() {
  num1 = -1;
  num2 = -1;
  operator = 0;
  displayValue = 0;
  document.querySelector("span").innerHTML = displayValue;
}
