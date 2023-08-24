let input = "";

function appendNumber(num) {
  input += num;
  updateResult();
}

function appendDecimal(dot) {
  if (!input.includes(dot)) {
    input += dot;
    updateResult();
  }
}

function clearInput() {
  input = "";
  updateResult();
}

function operate(operator) {
  if (input !== "") {
    input += operator;
    updateResult();
  }
}

function calculate() {
  try {
    input = eval(input).toString();
    updateResult();
  } catch (error) {
    input = "Error";
    updateResult();
  }
}

function backspace() {
  input = input.slice(0, -1);
  updateResult();
}

function updateResult() {
  document.getElementById("result").value = input;
}

function handleKeyPress(event) {
  const keyPressed = event.key;
  if (/^[0-9]$/.test(keyPressed)) {
    appendNumber(keyPressed);
  } else if (keyPressed === ".") {
    appendDecimal(keyPressed);
  } else if (keyPressed === "Enter") {
    calculate();
  } else if (/^[+\-*/]$/.test(keyPressed)) {
    operate(keyPressed);
  } else if (keyPressed === "Escape") {
    clearInput();
  } else if (keyPressed === "Backspace") {
    backspace();
  }
}

document.addEventListener("keydown", handleKeyPress);
