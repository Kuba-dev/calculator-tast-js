import { handleClick } from "./clickHandler.js";

const theme = localStorage.getItem("theme");

switch (theme) {
  case "dark-theme":
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme-btn", "dark-theme")
    break;
  case "light-theme":
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem("theme-btn", "light-theme")
    break;
  default:
    break;
}

document
  .querySelector(".calculator__keyboard")
  .addEventListener("click", handleClick);
