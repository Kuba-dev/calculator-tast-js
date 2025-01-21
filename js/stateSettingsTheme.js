import { lightThemeBtn, darkThemeBtn } from "./const.js";
import { setTheme } from "./setTheme.js";


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
