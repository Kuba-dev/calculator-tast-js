import {
  phraseIncorrectExpression,
  divisionByZeroPhrase,
  divisionIntoTokensRegex,
  regexOpen,
  regexClose,
  extraSpacesRegex,
  precedence
} from "./const.js";

function addMultiplicationBetweenNumberAndParenthesis(expression) {
  let modifiedExpression = expression.replace(regexOpen, "$1 * (");
  modifiedExpression = modifiedExpression.replace(regexClose, ")*$2");
  return modifiedExpression.replace(extraSpacesRegex, "");
}

function getReversePolishNotation(expression) {
  const output = [];
  const stack = [];
  const notFinishedTokens = expression.match(divisionIntoTokensRegex);
  console.log(notFinishedTokens)
  const tokens = [];

  for (let i = 0; i < notFinishedTokens.length; i++) {
    if (notFinishedTokens[i] === "(" && notFinishedTokens[i + 1] === "-" && notFinishedTokens[i + 3] === ")") {
      tokens.push(notFinishedTokens[i]);
      tokens.push(notFinishedTokens[i + 1] + notFinishedTokens[i + 2]);
      tokens.push(notFinishedTokens[i + 3]);
      i += 3;
      continue;
    }
    tokens.push(notFinishedTokens[i]);
  }
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
    console.log(stack)
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