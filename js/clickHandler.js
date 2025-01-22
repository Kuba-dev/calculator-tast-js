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
    if (isInvalidLine(display.value)) {
      display.value = key;
    } else {
      display.value += key;
    }
  }

  if (digitsOnTheKeyboard.includes(key)) {
    if (display.value === "0" && key !== ".") {
      display.value = key;
    } else if ((display.value[display.value.length - 1] === "." && key === ".") || dotsCheck(display.value, key)) {
      display.value = display.value;
    } else if (isInvalidLine(display.value)) {
      display.value = key;
    } else if (doubleDotsCheck(display.value, key)) {
      display.value = display.value;
    } else if (isResultFlag) {
      display.value = key;
      isResultFlag = false;
    } else {
      display.value += key;
    }
  }

  if (signOnTheKeyboard.includes(key)) {
    isResultFlag = false;
    if (
      key !== display.value[display.value.length - 1] &&
      signOnTheKeyboard.includes(
        display.value[display.value.length - 1]
      )
    ) {
      display.value = display.value.slice(0, -1) + key;
    } else if (display.value === "") { 
      display.value = `0${key}`;
    } else if (isInvalidLine(display.value)) {
      display.value = key;
    }

    if (
      !signOnTheKeyboard.includes(
        display.value[display.value.length - 1]
      ) && !(display.value === "")
    ) {
      display.value += key;
    }
  }

  switch (key) {
    case "C":
      if (isInvalidLine(display.value)) {
        display.value = "";
      } else if (isResultFlag) {
        display.value = "";
        isResultFlag = false;
      } else if (display.value.length === 1) {
        display.value = "";
      } else {
        display.value = display.value.slice(0, -1);
      }
      break;
    case "CE":
      if (isResultFlag) {
        display.value = "";
        isResultFlag = false;
      } else {
        display.value = "";
      }
      break;
    case "=":
      const result = getCalcResult(display.value);
      addHistory(display.value, result);
      display.value = result;
      isResultFlag = true;
      break;
    case "+-":
      display.value = changeSign(display.value);
      break;
    default:
      break;
  }

  return;
}
