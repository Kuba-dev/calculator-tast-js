const theme = localStorage.getItem("theme");
switch (theme) {
  case "dark-theme":
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme")
    break;
  case "light-theme":
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light-theme")
    break;
  default:
    break;
}