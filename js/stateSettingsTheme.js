import { lightThemeBtn, darkThemeBtn } from "./const.js";

let switches = document.getElementsByClassName('settings__change-theme-btn');
let style = localStorage.getItem('theme');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
  if (style === 'light') {
    lightThemeBtn.classList.add("settings__change-theme-btn--active");
    darkThemeBtn.classList.remove("settings__change-theme-btn--active");
  } else {
    darkThemeBtn.classList.add("settings__change-theme-btn--active");
    lightThemeBtn.classList.remove("settings__change-theme-btn--active");
  }
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

export function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = '../css/theme/light.css';
    lightThemeBtn.classList.add("settings__change-theme-btn--active");
    darkThemeBtn.classList.remove("settings__change-theme-btn--active");
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = '../css/theme/dark.css';
    darkThemeBtn.classList.add("settings__change-theme-btn--active");
    lightThemeBtn.classList.remove("settings__change-theme-btn--active");
  }
  localStorage.setItem('theme', theme);
}