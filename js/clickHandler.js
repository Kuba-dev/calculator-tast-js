import {
  digitsOnTheKeyboard,
  signOnTheKeyboard,
  bracketsOnTheKeyboard,
  display
} from "./const.js";
import { changeSign } from "./utils/signChangeLogic.js";
import { getCalcResult } from "./calculationLogic.js";
import { isInvalidLine } from "./utils/isInvalidLine.js";
import { dotsCheck } from "./utils/dotsCheck.js";
import { doubleDotsCheck } from "./utils/doubleDotsCheck.js";
import { addHistory } from "./historyCalc.js";

let isResultFlag = false;
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
    isResultFlag = false;
    if (isInvalidLine(display.textContent)) {
      display.textContent = key;
    } else {
      display.textContent += key;
    }
  }

  if (digitsOnTheKeyboard.includes(key)) {
    if (display.textContent === "0" && key !== ".") {
      display.textContent = key;
    } else if ((display.textContent[display.textContent.length - 1] === "." && key === ".") || dotsCheck(display.textContent, key)) {
      display.textContent = display.textContent;
    } else if (isInvalidLine(display.textContent)) {
      display.textContent = key;
    } else if (doubleDotsCheck(display.textContent, key)) {
      display.textContent = display.textContent;
    } else if (isResultFlag) {
      display.textContent = key;
      isResultFlag = false;
    } else {
      display.textContent += key;
    }
  }

  if (signOnTheKeyboard.includes(key)) {
    isResultFlag = false;
    if (
      key !== display.textContent[display.textContent.length - 1] &&
      signOnTheKeyboard.includes(
        display.textContent[display.textContent.length - 1]
      )
    ) {
      display.textContent = display.textContent.slice(0, -1) + key;
    } else if (display.textContent === "0") { 
      display.textContent = display.textContent;
    } else if (isInvalidLine(display.textContent)) {
      display.textContent = key;
    }

    if (
      !signOnTheKeyboard.includes(
        display.textContent[display.textContent.length - 1]
      ) && !(display.textContent === "")
    ) {
      display.textContent += key;
    }
  }

  switch (key) {
    case "C":
      if (isInvalidLine(display.textContent)) {
        display.textContent = "0";
      } else if (isResultFlag) {
        display.textContent = "0";
        isResultFlag = false;
      } else if (display.textContent.length === 1) {
        display.textContent = "0";
      } else {
        display.textContent = display.textContent.slice(0, -1);
      }
      break;
    case "CE":
      if (isResultFlag) {
        display.textContent = "0";
        isResultFlag = false;
      } else {
        display.innerHTML = "0";
      }
      break;
    case "=":
      const result = getCalcResult(display.textContent);
      addHistory(display.textContent, result);
      display.textContent = result;
      isResultFlag = true;
      break;
    case "+-":
      display.textContent = changeSign(display.textContent);
      break;
    default:
      break;
  }

  return;
}
