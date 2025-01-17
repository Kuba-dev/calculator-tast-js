import { lightThemeBtn, darkThemeBtn } from "./const.js";

export function clickHandleChangeTheme() {
    lightThemeBtn.addEventListener("click", () => {
        lightThemeBtn.classList.add("settings__change-theme-btn--active");
        darkThemeBtn.classList.remove("settings__change-theme-btn--active");

        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");

        localStorage.setItem("theme", "light-theme");
    });

    darkThemeBtn.addEventListener("click", () => {
        darkThemeBtn.classList.add("settings__change-theme-btn--active");
        lightThemeBtn.classList.remove("settings__change-theme-btn--active");

        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");

        localStorage.setItem("theme", "dark-theme");
    });
}
