import {
  signOnTheKeyboard,
  phraseIncorrectExpression,
  divisionByZeroPhrase,
  divisionIntoTokensRegex,
  regexOpen,
  regexClose,
} from "./const.js";

function addMultiplicationBetweenNumberAndParenthesis(expression) {
  let modifiedExpression = expression.replace(regexOpen, "$1 * (");
  modifiedExpression = modifiedExpression.replace(regexClose, ")*$3");
  return modifiedExpression.replace(/\s+/g, "");
}

function getReversePolishNotation(expression) {
  const output = [];
  const stack = [];
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
    "(": 0,
  };
  const tokens = expression.match(divisionIntoTokensRegex);
  for (const token of tokens) {
    if (!isNaN(token)) {
      output.push(token);
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        output.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        stack.length > 0 &&
        precedence[stack[stack.length - 1]] >= precedence[token]
      ) {
        output.push(stack.pop());
      }

      stack.push(token);
    }
  }
  while (stack.length > 0) {
    output.push(stack.pop());
  }
  return output.join(" ");
}

function calcReversePolishNotation(rpn) {
  const stack = [];
  rpn = rpn.split(" ");
  for (let i = 0; i < rpn.length; i++) {
    const token = rpn[i];
    if (!isNaN(token)) {
      stack.push(+token);
    } else {
      const b = stack.pop();
      const a = stack.pop();
      let result;
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          if (b === 0) {
            return divisionByZeroPhrase;
          }
          result = a / b;
          break;
        case "%":
          result = a % b;
          break;
      }
      stack.push(result);
    }
  }
  if (stack.length !== 1 || isNaN(stack[0])) {
    return phraseIncorrectExpression;
  }
  return stack[0];
}

export function getCalcResult(expression) {
  let result = calcReversePolishNotation(
    getReversePolishNotation(
      addMultiplicationBetweenNumberAndParenthesis(expression)
    )
  );
  if (!isNaN(result)) {
    return parseFloat(result.toFixed(3))
  }
  return result;
}