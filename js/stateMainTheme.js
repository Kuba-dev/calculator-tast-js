import { setTheme } from "./stateSettingsTheme.js";

const theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}