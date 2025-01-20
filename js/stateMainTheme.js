import { setTheme } from "./setTheme.js";

const theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}