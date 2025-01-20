import { lightThemeBtn, darkThemeBtn } from "./const.js";

export function setTheme(theme) {
  if (theme == "light") {
    document.getElementById("switcher-id").href = "../css/theme/light.css";
    if (darkThemeBtn && lightThemeBtn) {
      lightThemeBtn.classList.add("settings__change-theme-btn--active");
      darkThemeBtn.classList.remove("settings__change-theme-btn--active");
    }
  } else if (theme == "dark") {
    document.getElementById("switcher-id").href = "../css/theme/dark.css";
    if (darkThemeBtn && lightThemeBtn) {
      darkThemeBtn.classList.add("settings__change-theme-btn--active");
      lightThemeBtn.classList.remove("settings__change-theme-btn--active");
    }
  }
  localStorage.setItem("theme", theme);
}
