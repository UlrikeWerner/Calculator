// TODO: import things from other modules here
import { setOutput } from "./output.js";
import { add, subtract, multiply, divide } from "./math.js";
import { input } from "./input.js";
import { getRandomNumber } from "./random.js";

const handleCalculate = (event) => {
  const operation = event.target.getAttribute("data-calculate");
  let operator;
  let result;
  const a = Number.parseInt(input.a.value);
  const b = Number.parseInt(input.b.value);

  switch (operation) {
    case "add":
      result = add(a, b);
      operator = "+";
      break;
    case "subtract":
      result = subtract(a, b);
      operator = "-";
      break;
    case "multiply":
      result = multiply(a, b);
      operator = "*";
      break;
    case "divide":
      result = divide(a, b);
      operator = "/";
      break;
  }
  setOutput({ a: a, b: b, operator: operator, result: result });
};

const handleRandom = (event) => {
  if (event.target.getAttribute("data-random-for-input") === "a") {
    input.a.value = getRandomNumber();
  } else {
    input.b.value = getRandomNumber();
  }
};

document.querySelectorAll("[data-calculate]").forEach((buttonCalculate) => {
  buttonCalculate.addEventListener("click", handleCalculate);
});

document.querySelectorAll("[data-random-for-input]").forEach((buttonRandom) => {
  buttonRandom.addEventListener("click", handleRandom);
});
