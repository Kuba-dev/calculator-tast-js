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
export const lightThemeBtn = document.querySelector("#light-theme-btn");
export const darkThemeBtn = document.querySelector("#dark-theme-btn");
