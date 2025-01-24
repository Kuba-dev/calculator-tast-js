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
export const precedence = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "%": 2,
  "(": 0,
};
export const signChangeRegex = /^\(-.+\)$/; // (-X)
export const reverseSignChangeRegex = /^\(-(.+?)\)$/; // (-(X))
export const negativeSignChangeRegex = /^-\d+$/; // -X
export const divisionIntoTokensRegex = /\d+(\.\d+)?|[+*/%()-]/g;
export const divisionIntoNumbers = /[\-\+\*\/%()]/g;
export const regexOpen = /(\d+)\(/g; 
export const regexClose = /(\))(\d+)/g;
export const extraSpacesRegex = /\s+/g;
export const presenceDots = /\.\d+/;
export const minusBeforeBraketsRegex = /\(-\(/g; // (-(
export const divisionByZeroPhrase = "You can't divide by zero!";
export const phraseIncorrectExpression = "Incorrect expression!"
export const lightThemeBtn = document.querySelector("#light-theme-btn");
export const darkThemeBtn = document.querySelector("#dark-theme-btn");
export const historyList = document.querySelector(".history__list");
export const historyItemTemplate = `<li class="history__list-item"></li>`
export const display = document.querySelector(".calculator__display-text");
