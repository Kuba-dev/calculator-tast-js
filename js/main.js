import { handleClick } from "./clickHandler.js";
import { returnHistory } from "./returnHistory.js";

document
  .querySelector(".calculator__keyboard")
  .addEventListener("click", handleClick);

document
  .querySelector(".history__list")
  .addEventListener("click", returnHistory);

document.querySelector(".calculator__display-text").addEventListener('keydown', event => event.preventDefault());