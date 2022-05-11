const output = {
  a: document.querySelector("#output-a"),
  b: document.querySelector("#output-b"),
  operator: document.querySelector("#output-operator"),
  result: document.querySelector("#output-result"),
};

export const setOutput = ({ a = 0, b = 0, operator = "+", result = 0 }) => {
  output.a.textContent = a;
  output.b.textContent = b;
  output.operator.textContent = operator;
  output.result.textContent = result.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
};
