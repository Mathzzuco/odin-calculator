const allNumbers = document.querySelectorAll(".num-btn");
const calculators = document.querySelectorAll(".cal-btn");
const clearBtn = document.querySelector(".clear-btn");
const equalBtn = document.querySelector(".equal-btn");

var num1 = 0;
var num2 = 0;
var operator = 0;
var displayValue;
var lockNum1 = false;
var lockNum2 = true;
var numOfIterations = 0;
var result;

allNumbers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (lockNum1 == false) {
      if (num1 == 0) {
        num1 = e.target.innerHTML * 1;
        document.querySelector("span").innerHTML = num1;
        displayValue = num1;
      } else {
        num1 = displayValue + e.target.innerHTML;
        displayValue = num1;
        num1 = num1 * 1;
        document.querySelector("span").innerHTML = displayValue;
        return num1;
      }
    }
    if (lockNum2 == false) {
      if (num2 == 0) {
        num2 = e.target.innerHTML * 1;
        document.querySelector("span").innerHTML = num2;
        displayValue = num2;
      } else {
        num2 = displayValue + e.target.innerHTML;
        displayValue = num2;
        num2 = num2 * 1;
        document.querySelector("span").innerHTML = displayValue;
        return num2;
      }
    }
  });
});

calculators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (num2 != 0) {
      operate();
    }
    operator = e.target.innerHTML;
    if (num1 >= 0) {
      if (operator === "+") {
        operator = 1;
        lockNum1 = true;
        lockNum2 = false;
      }
      if (operator === "-") {
        operator = 2;
        lockNum1 = true;
        lockNum2 = false;
      }
      if (operator === "÷") {
        operator = 3;
        lockNum1 = true;
        lockNum2 = false;
      }
      if (operator === "*") {
        operator = 4;
        lockNum1 = true;
        lockNum2 = false;
      }
      numOfIterations = numOfIterations + 1;
    }
  });
});

function add() {
  if (numOfIterations == 1) {
    result = num1 + num2;
  } else {
    result = result + num2;
  }
}

function subtract() {
  if (numOfIterations == 1) {
    result = num1 - num2;
  } else {
    result = result - num2;
  }
}

function divide() {
  if (num2 == 0) {
    result = "error";
  } else if (numOfIterations == 1) {
    result = num1 / num2;
  } else {
    result = result / num2;
  }
}

function multiply() {
  if (numOfIterations == 1) {
    result = num1 * num2;
  } else {
    result = result * num2;
  }
}

function operate() {
  if (operator != 0) {
    if (operator == 1) {
      add();
    }
    if (operator == 2) {
      subtract();
    }
    if (operator == 3) {
      divide();
    }
    if (operator == 4) {
      multiply();
    }
    if (result % 1 != 0 && result != "error") {
      displayValue = +result.toFixed(2);
    } else {
      displayValue = result;
    }
    document.querySelector("span").innerHTML = displayValue;
    num1 = 0;
    num2 = 0;
  }
}

function clear() {
  num1 = 0;
  num2 = 0;
  operator = 0;
  displayValue = 0;
  document.querySelector("span").innerHTML = displayValue;
  lockNum1 = false;
  lockNum2 = true;
  numOfIterations = 0;
  result = 0;
}

clearBtn.addEventListener("click", clear);

equalBtn.addEventListener("click", operate);
