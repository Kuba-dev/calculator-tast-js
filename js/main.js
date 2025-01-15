const display = document.querySelector(".calculator__display-text");
const digitsOnTheKeyboard = [
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
const signOnTheKeyboard = ["*", "/", "-", "+", "%"];
const bracketsOnTheKeyboard = ["(", ")"];
const historyList = document.querySelector(".history__list");

function changeSign(string) {
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

  const regex = /^\(-.+\)$/;
  if (regex.test(numberArray.slice(-2).join(""))) {
    const changedNumber = numberArray
      .slice(-2)
      .join("")
      .match(/^\(-(.+?)\)$/)[1];
    console.log(changedNumber);
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

document.querySelector(".calculator__keyboard").onclick = (event) => {
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
    display.textContent += key;
  }

  if (signOnTheKeyboard.includes(key)) {
    if (
      key !== display.textContent[display.textContent.length - 1] &&
      signOnTheKeyboard.includes(
        display.textContent[display.textContent.length - 1]
      )
    ) {
      display.textContent = display.textContent.slice(0, -1) + key;
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
      display.textContent = display.textContent.slice(0, -1);
      break;
    case "CE":
      historyList.innerHTML = "";
      display.innerHTML = "";
      break;
    case "CH":
      historyList.innerHTML = "";
      break;
    case "=":
      historyList.innerHTML += `<li class="history__list-item">${display.textContent}</li>`;
      break;
    case "T":
      console.log("смена темы");
      break;
    case "+-":
      display.textContent = changeSign(display.textContent);
    default:
      break;
  }

  return;
};
