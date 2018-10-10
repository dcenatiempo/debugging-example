const calc = document.querySelector('section.calculator');
const mathInputs = calc.querySelector('input');
const operator = calc.querySelector('select');
const answerField = calc.querySelector('.answer');

operator.addEventListener('change', processInput);
mathInputs.forEach( item => {
  item.addEventListener('input', processInput);
})

function processInput (e) {
  let first = mathInputs[0].value;
  let second = mathInputs[1].value;
  let operation = operator.value;

  let result1 = evaluateEquation(first, second, operation);
  let result2 = evaluateEquation(first, second, operation);

  renderResult(result1);
}

function evaluateEquation(first, second, operator) {
  let mathProblem = `${first} ${operator} ${second}`;
  let answer = eval(mathProblem);
  return answer;
}

function evaluateEquation2(first, second, operator) {
  let answer;
  switch (operator) {
    case '+':
      answer = first + second;
    case '-':
      answer = first - second;
    case '*':
      answer = first * second;
    case '/':
      answer = first / second;
  }
  return answer;
}

function renderResult(result) {
  answerField.value = result;
}

