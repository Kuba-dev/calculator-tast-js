export const digitsOnTheKeyboard = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
];
export const signOnTheKeyboard = ["*", "/", "-", "+", "%"];
export const bracketsOnTheKeyboard = ["(", ")"];
export const signChangeRegex = /^\(-.+\)$/; // (-X)
export const reverseSignChangeRegex = /^\(-(.+?)\)$/; // (-(X))
export const negativeSignChangeRegex = /^-\d+$/; // -X
export const divisionIntoTokensRegex = /-?\d+(\.\d+)?|[+*/%()-]/g;
export const regexOpen = /(\d+)\(/g; 
export const regexClose = /(\))(\d+)/g;
export const divisionByZeroPhrase = "Делить на ноль нельзя!";
export const phraseIncorrectExpression = "Некорректное выражение!"
