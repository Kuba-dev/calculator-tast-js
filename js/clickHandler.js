import {
  digitsOnTheKeyboard,
  signOnTheKeyboard,
  bracketsOnTheKeyboard,
  phraseIncorrectExpression,
  divisionByZeroPhrase,
} from "./const.js";
import { changeSign } from "./signChangeLogic.js";
import {
  getCalcResult
} from "./calculationLogic.js";

const display = document.querySelector(".calculator__display-text");
const historyList = document.querySelector(".history__list");

export function handleClick(event) {
  if (
    event.target.classList[0] ===
      document.querySelector(".calculator__keyboard").classList[0] ||
    event.target.classList[0] ===
      document.querySelector(".calculator__keyboard-button").classList[0]
  )
    return;

  const key = event.target.textContent;

  if (bracketsOnTheKeyboard.includes(key)) {
    display.textContent += key;
  }

  if (digitsOnTheKeyboard.includes(key)) {
    if (display.textContent === "0" && key !== ".") {
      display.textContent = key;
    } else if (
      display.textContent === phraseIncorrectExpression ||
      display.textContent === divisionByZeroPhrase
    ) {
      display.textContent = key;
    } else {
      display.textContent += key;
    }
  }

  if (signOnTheKeyboard.includes(key)) {
    if (
      key !== display.textContent[display.textContent.length - 1] &&
      signOnTheKeyboard.includes(
        display.textContent[display.textContent.length - 1]
      )
    ) {
      display.textContent = display.textContent.slice(0, -1) + key;
    } else if (
      display.textContent === phraseIncorrectExpression ||
      display.textContent === divisionByZeroPhrase
    ) {
      display.textContent = key;
    }

    if (
      !signOnTheKeyboard.includes(
        display.textContent[display.textContent.length - 1]
      )
    ) {
      display.textContent += key;
    }
  }

  switch (key) {
    case "C":
      if (
        display.textContent === phraseIncorrectExpression ||
        display.textContent === divisionByZeroPhrase
      ) {
        display.textContent = "";
      } else {
        display.textContent = display.textContent.slice(0, -1);
      }
      break;
    case "CE":
      display.innerHTML = "";
      break;
    case "=":
      historyList.innerHTML += `<li class="history__list-item">${display.textContent}</li>`;
      display.textContent = getCalcResult(display.textContent);
      break;
    case "+-":
      display.textContent = changeSign(display.textContent);
      break;
    default:
      break;
  }

  return;
}
