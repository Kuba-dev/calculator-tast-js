import { signOnTheKeyboard, signChangeTemplate } from "./const.js";

export function changeSign(string) {
  if (signOnTheKeyboard.includes(string[string.length - 1])) {
    string = string.slice(0, -1);
  }
  const numberArray = [];
  let numberStartIndex = 0;

  for (let index = 0; index <= string.length; index++) {
    if (index === string.length || signOnTheKeyboard.includes(string[index])) {
      numberArray.push(string.substring(numberStartIndex, index + 1));
      numberStartIndex = index + 1;
    }
  }

  if (numberArray[numberArray.length - 1] === "") {
    numberArray.pop();
    numberArray[numberArray.length - 1] = numberArray[
      numberArray.length - 1
    ].slice(0, -1);
  }

  const newNumberArrayLength = numberArray.length;

  if (signChangeTemplate.test(numberArray.slice(-2).join(""))) {
    // проверка по regex
    const changedNumber = numberArray
      .slice(-2)
      .join("")
      .match(/^\(-(.+?)\)$/)[1]; // (-(X))
    numberArray[newNumberArrayLength - 2] = changedNumber;
    numberArray.length -= 1;
    return numberArray.join("");
  }

  if (newNumberArrayLength === 0) return "";
  if (newNumberArrayLength === 1) return `(-${string})`;
  numberArray[newNumberArrayLength - 1] = `(-${
    numberArray[newNumberArrayLength - 1]
  })`;

  return numberArray.join("");
}
