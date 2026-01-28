const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    handleInput(value);
  });
});

function handleInput(value) {
  if (value === "C") {
    clearDisplay();
  } else if (value === "←") {
    deleteLast();
  } else if (value === "=") {
    Operate();
  } else {
    appendValue(value);
  }
}

function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
    currentInput = value;
  } else {
    display.innerText += value;
    currentInput += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
  currentInput = "";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || "0";
}

function Operate() {
  try {
    let result;

    if (currentInput.includes("+")) {
      let parts = currentInput.split("+");
      result = Number(parts[0]) + Number(parts[1]);
    } 
    else if (currentInput.includes("-")) {
      let parts = currentInput.split("-");
      result = Number(parts[0]) - Number(parts[1]);
    } 
    else if (currentInput.includes("*")) {
      let parts = currentInput.split("*");
      result = Number(parts[0]) * Number(parts[1]);
    } 
    else if (currentInput.includes("/")) {
      let parts = currentInput.split("/");
      let divisor = Number(parts[1]);

      
      if (divisor === 0) {
        display.innerText = "Don't";
        currentInput = "";
        return;
      }

      result = Number(parts[0]) / divisor;
    } 
    else {
      result = currentInput;
    }

    currentInput = result.toString();
    display.innerText = currentInput;

  } catch {
    display.innerText = "Math is hard ";
    currentInput = "";
  }
}

