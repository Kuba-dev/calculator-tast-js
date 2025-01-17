export const lightThemeBtn = document.querySelector("#light-theme-btn");
export const darkThemeBtn = document.querySelector("#dark-theme-btn");

const theme = localStorage.getItem("theme");
switch (theme) {
  case "dark-theme":
    darkThemeBtn.classList.add("settings__change-theme-btn--active");
    lightThemeBtn.classList.remove("settings__change-theme-btn--active");

    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    break;
  case "light-theme":
    lightThemeBtn.classList.add("settings__change-theme-btn--active");
    darkThemeBtn.classList.remove("settings__change-theme-btn--active");

    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    break;
  default:
    break;
}